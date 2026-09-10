const fs = require('fs');
const path = require('path');

const sampleRate = 44100;

function writeWav(filePath, buffer) {
  const totalSamples = buffer.length;
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
    let s = Math.max(-1, Math.min(1, buffer[i]));
    const intSample = s < 0 ? s * 0x8000 : s * 0x7FFF;
    pcmData.writeInt16LE(Math.floor(intSample), i * 2);
  }

  const finalWav = Buffer.concat([wavHeader, pcmData]);
  fs.writeFileSync(filePath, finalWav);
  console.log('Saved:', filePath, 'Bytes:', finalWav.length);
}

function createFootstep(baseFreq, crunchIntensity, pitchShift) {
  const duration = 0.28; // 280ms
  const totalSamples = Math.floor(sampleRate * duration);
  const buffer = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;

    // 1. Low Thump (Heel impact on floor)
    const thumpEnv = Math.exp(-t / 0.045);
    const thump = Math.sin(2 * Math.PI * (baseFreq - t * 120) * t) * 0.7 * thumpEnv;

    // 2. Mid Sole Slap
    const slapEnv = Math.exp(-t / 0.025);
    const slap = Math.sin(2 * Math.PI * (baseFreq * 2.6 + pitchShift) * t) * 0.4 * slapEnv;

    // 3. Texture / Concrete Grit Noise
    const gritEnv = Math.exp(-t / 0.06) * (1 - Math.exp(-t / 0.003));
    const noise = (Math.random() * 2 - 1) * crunchIntensity * gritEnv;

    // 4. Subtle Hallway Resonance
    const tailEnv = Math.exp(-t / 0.12);
    const tail = Math.sin(2 * Math.PI * 110 * t) * 0.15 * tailEnv;

    buffer[i] = (thump + slap + noise + tail) * 0.85;
  }

  return buffer;
}

const outDir = path.join(__dirname, 'public', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate Left Footstep
const step1 = createFootstep(78, 0.35, 12);
writeWav(path.join(outDir, 'footstep_1.wav'), step1);

// Generate Right Footstep (subtle pitch and texture variation for natural cadence)
const step2 = createFootstep(84, 0.38, -10);
writeWav(path.join(outDir, 'footstep_2.wav'), step2);

console.log('Footstep audio generation complete.');
