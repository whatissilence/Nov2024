import { umzug, sequelize } from './migrate.js';

try {
  const executed = await umzug.executed();
  const pending = await umzug.pending();

  console.log('\nApplied migrations:');
  if (executed.length === 0) {
    console.log('  (none)');
  } else {
    executed.forEach(m => console.log(`  ${m.name}`));
  }

  console.log('\nPending migrations:');
  if (pending.length === 0) {
    console.log('  (none)');
  } else {
    pending.forEach(m => console.log(`  ${m.name}`));
  }

  console.log('\nSummary:');
  console.log(`  Applied: ${executed.length}`);
  console.log(`  Pending: ${pending.length}\n`);
} catch (err) {
  console.error('Error while getting migration status:', err);
  process.exit(1);
} finally {
  await sequelize.close();
}
