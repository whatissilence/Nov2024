import { umzug, sequelize } from './migrate.js';

try {
  console.log('Reverting last migration...');
  const result = await umzug.down();
  if (!result || !result.length) {
    console.log('No migrations to revert.');
  } else {
    console.log(`Reverted migration: ${result[0].name}`);
  }
} catch (error) {
  console.error('Error while reverting migration: ', error);
  process.exit(1);
} finally {
  await sequelize.close();
}



