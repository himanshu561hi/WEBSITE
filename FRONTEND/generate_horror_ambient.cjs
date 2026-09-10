const fs = require('fs');
const path = require('path');

// 44.1kHz 16-bit Stereo Ambient Horror Track (Loopable, 18 seconds)
const sampleRate = 44100;
const duration = 18.0; // 18 seconds
const totalSamples = Math.floor(sampleRate * duration);
const leftChannel = new Float32Array(totalSamples);
const rightChannel = new Float32Array(totalSamples);

// 1. Deep Sub-Bass Drone (Eerie root D1 = 36.7Hz, minor second Eb1 = 38.9Hz for terrifying acoustic beat frequency)
for (let i = 0; i < totalSamples; i++) {
  const t = i / sampleRate;
  // Slow breathing pulse (0.12Hz)
  const breath = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / duration * 2);
  const drone1 = Math.sin(2 * Math.PI * 36.7 * t) * 0.45;
  const drone2 = Math.sin(2 * Math.PI * 38.9 * t) * 0.35; // creates 2.2Hz acoustic throbbing
  const drone3 = Math.sin(2 * Math.PI * 73.4 * t) * 0.2;
  const subBass = (drone1 + drone2 + drone3) * (0.6 + 0.4 * breath);
  leftChannel[i] += subBass;
  rightChannel[i] += subBass;
}

// 2. Slow Haunted Cavern Wind (Slow sweeping bandpass filter over noise)
let yL1 = 0, yL2 = 0, yR1 = 0, yR2 = 0;
for (let i = 0; i < totalSamples; i++) {
  const t = i / sampleRate;
  // Wind sweeps slowly between 180Hz and 520Hz over 9 seconds
  const sweep = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / 9.0);
  const centerFreq = 180 + sweep * 340;
  const q = 3.5;
  const omega = (2 * Math.PI * centerFreq) / sampleRate;
  const alpha = Math.sin(omega) / (2 * q);
  const b0 = alpha, b2 = -alpha, a0 = 1 + alpha, a1 = -2 * Math.cos(omega), a2 = 1 - alpha;
  
  const whiteL = (Math.random() * 2 - 1) * 0.25;
  const whiteR = (Math.random() * 2 - 1) * 0.25;
  
  const outL = (b0/a0)*whiteL + (b2/a0)*0 - (a1/a0)*yL1 - (a2/a0)*yL2;
  yL2 = yL1; yL1 = outL;
  const outR = (b0/a0)*whiteR + (b2/a0)*0 - (a1/a0)*yR1 - (a2/a0)*yR2;
  yR2 = yR1; yR1 = outR;
  
  const windEnv = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / duration);
  leftChannel[i] += outL * (0.2 + 0.2 * windEnv);
  rightChannel[i] += outR * (0.2 + 0.2 * windEnv);
}

// 3. Supernatural Dissonant Tone Swells (Tritone D2 = 73.4Hz + G#2 = 103.8Hz & A2 = 110Hz)
for (let i = 0; i < totalSamples; i++) {
  const t = i / sampleRate;
  // Slow swells peaking at t=4s and t=13s
  const swell1 = Math.exp(-Math.pow((t - 4.5) / 2.5, 2)) * 0.35;
  const swell2 = Math.exp(-Math.pow((t - 13.5) / 2.8, 2)) * 0.38;
  const totalSwell = swell1 + swell2;
  
  if (totalSwell > 0.001) {
    // Eerie detuned sinister bell/pad with slow vibrato
    const vib = Math.sin(2 * Math.PI * 4.2 * t) * 1.5;
    const toneL = Math.sin(2 * Math.PI * (103.8 + vib) * t) * 0.6 + Math.sin(2 * Math.PI * 207.6 * t) * 0.3;
    const toneR = Math.sin(2 * Math.PI * (110.0 - vib) * t) * 0.6 + Math.sin(2 * Math.PI * 220.0 * t) * 0.3;
    leftChannel[i] += toneL * totalSwell;
    rightChannel[i] += toneR * totalSwell;
  }
}

// 4. Distant ghostly metallic resonances (at t = 2s, 8s, 15s)
function addSpookyPing(time, freq, decay, gain, pan) {
  const start = Math.floor(time * sampleRate);
  const len = Math.floor(decay * sampleRate);
  for (let j = 0; j < len; j++) {
    const idx = start + j;
    if (idx >= totalSamples) break;
    const t = j / sampleRate;
    const env = Math.exp(-t / (decay * 0.3));
    const osc = Math.sin(2 * Math.PI * freq * t) * (1 + 0.3 * Math.sin(2 * Math.PI * 6.5 * t));
    const val = osc * gain * env;
    leftChannel[idx] += val * (1 - pan);
    rightChannel[idx] += val * pan;
  }
}

addSpookyPing(2.2, 540, 3.5, 0.18, 0.25);
addSpookyPing(8.4, 480, 4.0, 0.22, 0.75);
addSpookyPing(14.8, 620, 3.2, 0.15, 0.50);

// Seamless loop crossfade (1.2 seconds at the boundary)
const fadeLen = Math.floor(1.2 * sampleRate);
for (let i = 0; i < fadeLen; i++) {
  const cross = i / fadeLen;
  const endIdx = totalSamples - fadeLen + i;
  
  // Blend end into beginning
  leftChannel[i] = leftChannel[i] * cross + leftChannel[endIdx] * (1 - cross);
  rightChannel[i] = rightChannel[i] * cross + rightChannel[endIdx] * (1 - cross);
  
  leftChannel[endIdx] = leftChannel[i];
  rightChannel[endIdx] = rightChannel[i];
}

// Normalize
let peak = 0;
for (let i = 0; i < totalSamples; i++) {
  const aL = Math.abs(leftChannel[i]);
  const aR = Math.abs(rightChannel[i]);
  if (aL > peak) peak = aL;
  if (aR > peak) peak = aR;
}

const targetPeak = 0.85;
const norm = targetPeak / (peak || 1);
for (let i = 0; i < totalSamples; i++) {
  leftChannel[i] *= norm;
  rightChannel[i] *= norm;
}

// Convert to 16-bit Stereo PCM WAV
const numChannels = 2;
const bytesPerSample = 2;
const blockAlign = numChannels * bytesPerSample;
const byteRate = sampleRate * blockAlign;
const dataSize = totalSamples * blockAlign;
const wavHeader = Buffer.alloc(44);

wavHeader.write('RIFF', 0);
wavHeader.writeUInt32LE(36 + dataSize, 4);
wavHeader.write('WAVE', 8);
wavHeader.write('fmt ', 12);
wavHeader.writeUInt32LE(16, 16);
wavHeader.writeUInt16LE(1, 20); // PCM
wavHeader.writeUInt16LE(numChannels, 22);
wavHeader.writeUInt32LE(sampleRate, 24);
wavHeader.writeUInt32LE(byteRate, 28);
wavHeader.writeUInt16LE(blockAlign, 32);
wavHeader.writeUInt16LE(16, 34);
wavHeader.write('data', 36);
wavHeader.writeUInt32LE(dataSize, 40);

const pcmData = Buffer.alloc(dataSize);
for (let i = 0; i < totalSamples; i++) {
  const sL = Math.max(-1, Math.min(1, leftChannel[i]));
  const sR = Math.max(-1, Math.min(1, rightChannel[i]));
  const intL = sL < 0 ? sL * 0x8000 : sL * 0x7FFF;
  const intR = sR < 0 ? sR * 0x8000 : sR * 0x7FFF;
  pcmData.writeInt16LE(Math.floor(intL), i * 4);
  pcmData.writeInt16LE(Math.floor(intR), i * 4 + 2);
}

const finalWav = Buffer.concat([wavHeader, pcmData]);
const outPath = path.join(__dirname, 'public', 'audio', 'horror_ambient_slow.wav');
fs.writeFileSync(outPath, finalWav);
console.log('Horror ambient generated at:', outPath, 'Size:', finalWav.length, 'bytes');
