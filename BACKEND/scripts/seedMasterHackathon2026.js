/**
 * Seed Script: Master Hackathon Record for Legacy 2026 Hackathon
 * 
 * Creates the top-level Hackathon entity for 'can-hackathon-2026' and links it
 * to the pre-existing HackathonSetting document.
 * 
 * Safety Invariants:
 * - Idempotent: Never creates duplicate master records if one already exists.
 * - Non-destructive: Never alters operational data.
 * - References: Links settingsRef and hackathonRef bidirectionally.
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonAuditLog = require('../models/HackathonAuditLog');

async function seedMasterHackathon2026() {
  const uri = process.env.MONGO_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('MONGO_URI is not defined in environment.');
  }

  await mongoose.connect(uri);
  console.log('[SEED] Connected to MongoDB.');

  try {
    // 1. Check if master Hackathon already exists
    let master = await Hackathon.findOne({ hackathonId: 'can-hackathon-2026' });
    if (master) {
      console.log(`[SEED] Master Hackathon "can-hackathon-2026" already exists (ID: ${master._id}, status: ${master.status}).`);
      return master;
    }

    // 2. Locate existing HackathonSetting
    let setting = await HackathonSetting.findOne({ hackathonId: 'can-hackathon-2026' });
    if (!setting) {
      setting = await HackathonSetting.getOrCreateSettings('can-hackathon-2026');
      console.log(`[SEED] Initialized missing HackathonSetting for can-hackathon-2026.`);
    } else {
      console.log(`[SEED] Found existing HackathonSetting for can-hackathon-2026 (ID: ${setting._id}).`);
    }

    // 3. Deactivate any stray test active hackathons before marking 2026 as ACTIVE
    // (Preserves partial unique index unique_active_hackathon_idx)
    const existingActive = await Hackathon.find({ status: 'ACTIVE', isDeleted: { $ne: true } });
    for (const act of existingActive) {
      if (act.hackathonId !== 'can-hackathon-2026') {
        console.log(`[SEED] Transitioning non-production active hackathon "${act.hackathonId}" to DRAFT.`);
        act.status = 'DRAFT';
        await act.save();
      }
    }

    // 4. Create Master Hackathon
    master = await Hackathon.create({
      hackathonId: 'can-hackathon-2026',
      slug: 'code-arambh-2026',
      name: setting.name || 'Code-A-Nova National Hackathon 2026',
      title: setting.name || 'Code-A-Nova National Hackathon 2026',
      shortDescription: setting.tagline || 'National Premier Student Innovation Hackathon',
      description: setting.description || 'Code-A-Nova presents a premier national-level hackathon bringing together students, developers, and innovators.',
      status: 'ACTIVE',
      startDate: setting.startDate || null,
      endDate: setting.endDate || null,
      submissionDeadline: setting.submissionDeadline || null,
      resultDate: setting.resultDate || null,
      settingsRef: setting._id,
      organizerName: 'Code-A-Nova',
      tags: ['AI', 'Web3', 'Full Stack', 'Cloud'],
      isDeleted: false,
    });

    console.log(`[SEED] Master Hackathon created successfully: ${master.hackathonId} (slug: ${master.slug}, status: ${master.status}).`);

    // 5. Link HackathonSetting to Hackathon
    setting.hackathonRef = master._id;
    await setting.save();
    console.log(`[SEED] Linked HackathonSetting.hackathonRef to master Hackathon._id.`);

    // 6. Audit log
    await HackathonAuditLog.log({
      actorId: 'system-m4-seed',
      actorName: 'System Migration M4',
      actorEmail: 'system@code-a-nova.online',
      role: 'system',
      action: 'SEED_MASTER_HACKATHON',
      targetEntity: 'Hackathon',
      targetId: master.hackathonId,
      hackathonId: master.hackathonId,
      newState: { hackathonId: master.hackathonId, slug: master.slug, status: master.status },
      reason: 'Seeded master 2026 Hackathon record for Multi-Hackathon Phase M4 migration.',
    });

    return master;
  } finally {
    await mongoose.disconnect();
    console.log('[SEED] Disconnected from MongoDB.');
  }
}

if (require.main === module) {
  seedMasterHackathon2026()
    .then(() => {
      console.log('[SEED] Master 2026 Hackathon seeding finished.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[SEED ERROR]', err);
      process.exit(1);
    });
}

module.exports = seedMasterHackathon2026;
