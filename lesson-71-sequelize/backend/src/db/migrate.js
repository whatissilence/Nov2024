import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
  }
);

export const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

async function runMigrations() {
  try {
    const pending = await umzug.pending();
    if (pending.length === 0) {
      console.log('  No pending migrations found.');
    } else {
      console.log('Running migrations:');
      pending.forEach(m => console.log(`  ${m.name}`));
      await umzug.up();
      console.log('Migrations finished.');
    }
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await sequelize.close();
  }
}

const currentFilePath = fileURLToPath(import.meta.url);
const entryFilePath = path.resolve(process.argv[1]);

if (currentFilePath === entryFilePath) {
  runMigrations();
}

export { runMigrations };
