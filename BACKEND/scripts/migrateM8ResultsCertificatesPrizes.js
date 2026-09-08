/**
 * Phase M8 Migration & Verification Script
 * Validates and ensures 100% hackathonId scoping across:
 * - HackathonResult
 * - HackathonCertificate
 * - HackathonPrize
 * - HackathonSponsor
 * - HackathonPrizeFulfillment
 * 
 * Default: DRY RUN.
 * To apply: node BACKEND/scripts/migrateM8ResultsCertificatesPrizes.js --apply --confirm "MIGRATE M8 DATA"
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

const HackathonResult = require('../models/HackathonResult');
const HackathonCertificate = require('../models/HackathonCertificate');
const HackathonPrize = require('../models/HackathonPrize');
const HackathonSponsor = require('../models/HackathonSponsor');
const HackathonPrizeFulfillment = require('../models/HackathonPrizeFulfillment');
const HackathonTeam = require('../models/HackathonTeam');

async function runMigrationAndVerification(options = {}) {
  const isApply = options.apply || process.argv.includes('--apply');
  const confirmIndex = process.argv.indexOf('--confirm');
  const confirmVal = confirmIndex !== -1 ? process.argv[confirmIndex + 1] : (options.confirm || '');
  const isConfirmed = isApply && confirmVal === 'MIGRATE M8 DATA';
  const isDryRun = !isConfirmed;

  console.log('=== Starting Phase M8 Verification & Migration Script ===');
  console.log(`Mode: ${isDryRun ? 'DRY RUN (Read-Only)' : 'APPLY (Writing changes)'}`);
  if (isDryRun && isApply && confirmVal !== 'MIGRATE M8 DATA') {
    console.warn('⚠️  --apply specified without --confirm "MIGRATE M8 DATA". Defaulting safely to DRY RUN.');
  }

  if (mongoose.connection.readyState !== 1) {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('MONGO_URI is missing from environment');
      process.exit(1);
    }
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  }

  const collections = [
    { name: 'HackathonResult', model: HackathonResult, hasTeam: true },
    { name: 'HackathonCertificate', model: HackathonCertificate, hasTeam: true },
    { name: 'HackathonPrize', model: HackathonPrize, hasTeam: false },
    { name: 'HackathonSponsor', model: HackathonSponsor, hasTeam: false },
    { name: 'HackathonPrizeFulfillment', model: HackathonPrizeFulfillment, hasTeam: true }
  ];

  const results = {};

  for (const item of collections) {
    const total = await item.model.countDocuments();
    const missingHackathonId = await item.model.countDocuments({
      $or: [
        { hackathonId: { $exists: false } },
        { hackathonId: null },
        { hackathonId: '' }
      ]
    });

    let patched = 0;
    if (missingHackathonId > 0) {
      console.log(`Found ${missingHackathonId} records in ${item.name} missing hackathonId.`);
      if (isDryRun) {
        console.log(`[DRY RUN] Would patch ${missingHackathonId} records in ${item.name}.`);
      } else {
        const recordsToPatch = await item.model.find({
          $or: [
            { hackathonId: { $exists: false } },
            { hackathonId: null },
            { hackathonId: '' }
          ]
        });

        for (const doc of recordsToPatch) {
          let assignedId = 'can-hackathon-2026';
          if (item.hasTeam && doc.teamId) {
            const team = await HackathonTeam.findById(doc.teamId).select('hackathonId');
            if (team?.hackathonId) {
              assignedId = team.hackathonId;
            }
          }
          doc.hackathonId = assignedId;
          await doc.save();
          patched++;
        }
      }
    }

    if (!isDryRun) {
      // Safely drop legacy un-scoped single field unique indexes if present
      try {
        if (item.name === 'HackathonPrize') {
          await mongoose.connection.db.collection('hackathonprizes').dropIndex('prizeId_1').catch(() => {});
        }
        if (item.name === 'HackathonSponsor') {
          await mongoose.connection.db.collection('hackathonsponsors').dropIndex('sponsorId_1').catch(() => {});
        }
      } catch (e) {
        // Ignore if index doesn't exist
      }

      // Sync indexes
      await item.model.syncIndexes();
    }

    const distinctHackathons = await item.model.distinct('hackathonId');

    results[item.name] = {
      totalRecords: total,
      missingHackathonId,
      patched,
      distinctHackathons,
      mode: isDryRun ? 'DRY_RUN' : 'APPLIED'
    };
  }

  console.log('Migration & Verification Results:');
  console.log(JSON.stringify(results, null, 2));

  console.log(`=== Phase M8 Verification Complete (${isDryRun ? 'DRY RUN' : 'APPLIED'}) ===`);
  return results;
}

if (require.main === module) {
  runMigrationAndVerification()
    .then(() => {
      mongoose.disconnect();
      process.exit(0);
    })
    .catch((err) => {
      console.error('Migration failed:', err);
      mongoose.disconnect();
      process.exit(1);
    });
}

module.exports = runMigrationAndVerification;
