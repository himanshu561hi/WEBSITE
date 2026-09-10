const fs = require('fs');
const path = require('path');

const sampleRate = 44100;

function writeWav(filename, buffer) {
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
  const outPath = path.join(__dirname, 'public', 'audio', filename);
  fs.writeFileSync(outPath, finalWav);
  console.log('Saved:', outPath, 'Bytes:', finalWav.length);
}

// ── 1. LOCK UNLATCH SFX (0.65 seconds) ──
const lockSamples = Math.floor(sampleRate * 0.65);
const lockBuf = new Float32Array(lockSamples);

function addNoise(buf, startSec, durSec, gain, freq) {
  const startIdx = Math.floor(startSec * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(durSec * sampleRate), buf.length);
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const env = Math.exp(-t / (durSec * 0.4));
    const noise = (Math.random() * 2 - 1) * Math.sin(2 * Math.PI * freq * t) * gain * env;
    buf[i] += noise;
  }
}

function addClickTo(buf, time, freq, decay, gain) {
  const startIdx = Math.floor(time * sampleRate);
  const endIdx = Math.min(startIdx + Math.floor(0.1 * sampleRate), buf.length);
  for (let i = startIdx; i < endIdx; i++) {
    const t = (i - startIdx) / sampleRate;
    const env = Math.exp(-t / decay);
    const osc = Math.sin(2 * Math.PI * freq * t + Math.sin(2 * Math.PI * freq * 1.6 * t) * 0.4);
    buf[i] += osc * gain * env;
  }
}

// Key turning / pins snapping
addClickTo(lockBuf, 0.05, 1850, 0.015, 0.5);
addClickTo(lockBuf, 0.12, 1420, 0.02, 0.6);
// Big heavy mechanical iron tumbler SNAP: "CLACK-CHUNKK!"
addClickTo(lockBuf, 0.22, 920, 0.035, 0.85);
addClickTo(lockBuf, 0.25, 1680, 0.025, 0.7);
// Iron bolt sliding friction
addNoise(lockBuf, 0.26, 0.20, 0.65, 1100);
// Latch dropping free
addClickTo(lockBuf, 0.45, 740, 0.04, 0.9);
addClickTo(lockBuf, 0.46, 125, 0.08, 0.8);

writeWav('lock_unlatch.wav', lockBuf);

// ── 2. HEAVY DOOR CREAK OPEN SFX (2.0 seconds) ──
const doorSamples = Math.floor(sampleRate * 2.0);
const doorBuf = new Float32Array(doorSamples);

// Heavy rusted iron door hinge screeching & groaning
for (let i = 0; i < doorSamples; i++) {
  const t = i / sampleRate;
  const p = t / 2.0;
  // Attack & slow fade
  const env = Math.sin(p * Math.PI) * Math.exp(-p * 0.8);
  
  // Screechy sweeping frequencies
  const baseFreq = 380 + Math.sin(p * Math.PI * 1.8) * 120 + (Math.random() * 25 - 12.5);
  const modFreq = 38 + Math.sin(p * Math.PI * 3.5) * 18;
  const modIndex = 5.0;
  
  const mod = Math.sin(2 * Math.PI * modFreq * t) * modIndex;
  const phase = 2 * Math.PI * (baseFreq + mod * 45) * t;
  
  // Harsh rusty saw + square
  const s1 = 2 * (phase / (2 * Math.PI) - Math.floor(phase / (2 * Math.PI) + 0.5));
  const s2 = Math.sin(phase) > 0 ? 0.65 : -0.65;
  const stickSlip = (Math.random() * 2 - 1) * 0.18;
  
  const creak = (s1 * 0.55 + s2 * 0.45 + stickSlip) * 0.55 * env;
  
  // Heavy low air displacement of 500-pound iron gate
  const lowThud = Math.sin(2 * Math.PI * 52 * t) * Math.exp(-t * 1.8) * 0.7;
  
  doorBuf[i] = creak + lowThud;
}

// Initial metal shove impact transient
addClickTo(doorBuf, 0.02, 110, 0.12, 0.95);
addClickTo(doorBuf, 0.03, 850, 0.04, 0.6);

writeWav('door_creak_open.wav', doorBuf);
