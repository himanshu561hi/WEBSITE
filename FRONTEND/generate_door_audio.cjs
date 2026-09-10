const fs = require('fs');
const path = require('path');

// Generate 44.1kHz 16-bit Mono/Stereo WAV
const sampleRate = 44100;
const duration = 2.4; // 2.4 seconds
const totalSamples = Math.floor(sampleRate * duration);
const buffer = new Float32Array(totalSamples);

function addNoiseBurst(startSec, durSec, gain, centerFreq, q) {
  const startIdx = Math.floor(startSec * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(durSec * sampleRate), totalSamples);
  let y1 = 0, y2 = 0;
  const omega = (2 * Math.PI * centerFreq) / sampleRate;
  const alpha = Math.sin(omega) / (2 * q);
  const b0 = alpha;
  const b2 = -alpha;
  const a0 = 1 + alpha;
  const a1 = -2 * Math.cos(omega);
  const a2 = 1 - alpha;
  
  let x1 = 0, x2 = 0;
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const env = Math.exp(-t / (durSec * 0.35)) * (1 - Math.exp(-t / 0.005));
    const white = (Math.random() * 2 - 1) * gain * env;
    const out = (b0/a0)*white + (b2/a0)*x2 - (a1/a0)*y1 - (a2/a0)*y2;
    x2 = x1; x1 = white;
    y2 = y1; y1 = out;
    buffer[i] += out;
  }
}

function addClick(time, freq, decay, gain) {
  const startIdx = Math.floor(time * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(0.12 * sampleRate), totalSamples);
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const env = Math.exp(-t / decay);
    const osc = Math.sin(2 * Math.PI * freq * t + Math.sin(2 * Math.PI * freq * 1.8 * t) * 0.4);
    buffer[i] += osc * gain * env;
  }
}

function addHingeCreak(startSec, durSec, baseFreq, gain) {
  const startIdx = Math.floor(startSec * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(durSec * sampleRate), totalSamples);
  let phase = 0;
  let modPhase = 0;
  
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const p = t / durSec;
    // Envelope with attack and natural taper
    const env = Math.sin(p * Math.PI) * (1 + 0.35 * Math.sin(p * Math.PI * 8));
    
    // Frequency sweeps as door opens
    const currentFreq = baseFreq + Math.sin(p * Math.PI * 1.5) * 110 + (Math.random() * 20 - 10);
    const modFreq = 36 + Math.sin(p * Math.PI * 3) * 14;
    const modIndex = 4.5 + Math.sin(p * Math.PI * 4) * 2.0;
    
    modPhase += (2 * Math.PI * modFreq) / sampleRate;
    const mod = Math.sin(modPhase) * modIndex;
    
    // Stick-slip jitter
    const stickSlip = (Math.random() * 2 - 1) * 0.15;
    
    phase += (2 * Math.PI * (currentFreq + mod * 40)) / sampleRate;
    
    // Complex screechy waveform: sawtooth + square mix
    let s1 = 2 * (phase / (2 * Math.PI) - Math.floor(phase / (2 * Math.PI) + 0.5));
    let s2 = Math.sin(phase) > 0 ? 0.7 : -0.7;
    let wave = s1 * 0.6 + s2 * 0.4 + stickSlip;
    
    buffer[i] += wave * gain * env;
  }
}

function addLowThud(time, freq, gain, decay) {
  const startIdx = Math.floor(time * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(decay * 2 * sampleRate), totalSamples);
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const env = Math.exp(-t / decay);
    const osc = Math.sin(2 * Math.PI * (freq * Math.exp(-t * 8)) * t);
    buffer[i] += osc * gain * env;
  }
}

// 1. Lock Rattling / Key Tumbler (0.00s - 0.25s)
addClick(0.04, 1850, 0.015, 0.45);
addNoiseBurst(0.04, 0.05, 0.3, 2400, 3);
addClick(0.12, 1420, 0.022, 0.55);
addClick(0.19, 2100, 0.018, 0.6);

// 2. Heavy Lock Unlatch & Deadbolt Slide (0.28s - 0.55s)
// Big mechanical "CLACK-CHUNKK"
addClick(0.28, 980, 0.04, 0.75);
addClick(0.31, 1650, 0.025, 0.65);
addLowThud(0.31, 120, 0.7, 0.12);
// Iron bolt sliding friction
addNoiseBurst(0.33, 0.22, 0.6, 920, 2.5);
addClick(0.52, 780, 0.05, 0.8); // Bolt snaps free into bracket
addLowThud(0.52, 95, 0.85, 0.18);

// 3. Heavy Iron Gate Creaking Open (0.60s - 2.1s)
// The classic terrifying rusty dungeon hinge scream
addHingeCreak(0.62, 1.35, 340, 0.45);
addHingeCreak(0.75, 1.10, 520, 0.25);
// Heavy low door mass swinging in air
addLowThud(0.65, 55, 0.65, 0.45);
addNoiseBurst(0.70, 0.85, 0.35, 450, 1.2); // Air displacement whoosh

// 4. Secondary chain/iron ring rattle settling (1.6s - 2.3s)
addClick(1.65, 1550, 0.03, 0.35);
addClick(1.78, 1220, 0.04, 0.25);
addClick(1.95, 1840, 0.02, 0.2);

// Normalize & soft-clip
let maxVal = 0;
for (let i = 0; i < totalSamples; i++) {
  const abs = Math.abs(buffer[i]);
  if (abs > maxVal) maxVal = abs;
}

if (maxVal > 0.98) {
  const factor = 0.95 / maxVal;
  for (let i = 0; i < totalSamples; i++) {
    buffer[i] *= factor;
  }
}

// Convert to 16-bit PCM WAV Buffer
const numChannels = 1;
const bytesPerSample = 2;
const blockAlign = numChannels * bytesPerSample;
const byteRate = sampleRate * blockAlign;
const dataSize = totalSamples * blockAlign;
const wavHeader = Buffer.alloc(44);

wavHeader.write('RIFF', 0);
wavHeader.writeUInt32LE(36 + dataSize, 4);
wavHeader.write('WAVE', 8);
wavHeader.write('fmt ', 12);
wavHeader.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
wavHeader.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
wavHeader.writeUInt16LE(numChannels, 22);
wavHeader.writeUInt32LE(sampleRate, 24);
wavHeader.writeUInt32LE(byteRate, 28);
wavHeader.writeUInt16LE(blockAlign, 32);
wavHeader.writeUInt16LE(16, 34); // BitsPerSample
wavHeader.write('data', 36);
wavHeader.writeUInt32LE(dataSize, 40);

const pcmData = Buffer.alloc(dataSize);
for (let i = 0; i < totalSamples; i++) {
  // Soft saturation
  let s = buffer[i];
  s = Math.max(-1, Math.min(1, s));
  const intSample = s < 0 ? s * 0x8000 : s * 0x7FFF;
  pcmData.writeInt16LE(Math.floor(intSample), i * 2);
}

const finalWav = Buffer.concat([wavHeader, pcmData]);
const outPath = path.join(__dirname, 'public', 'audio', 'gate_unlock_and_open.wav');
fs.writeFileSync(outPath, finalWav);
console.log('Successfully generated:', outPath, 'Size:', finalWav.length, 'bytes');
