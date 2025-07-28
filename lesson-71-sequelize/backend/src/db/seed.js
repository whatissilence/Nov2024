import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSeeds() {
  const seedFiles = fs.readdirSync(path.join(__dirname, 'seeders'))
    .filter(f => f.endsWith('.js'))
    .sort()

  for (const file of seedFiles) {
    const fullPath = path.join(__dirname, 'seeders', file);
    const seed = await import(pathToFileURL(fullPath));
    if (seed.up) {
      await seed.up();
      console.log(`--- Seed ${file} applied ---`);
    }
  }
}

async function undoSeeds() {
  const seedFiles = fs.readdirSync(path.join(__dirname, 'seeders'))
    .filter(f => f.endsWith('.js'))
    .sort()
    .reverse(); // Undo should run in reverse order

  for (const file of seedFiles) {
    const fullPath = path.join(__dirname, 'seeders', file);
    const seed = await import(pathToFileURL(fullPath));
    if (seed.down) {
      await seed.down();
      console.log(`--- Seed ${file} reverted ---`);
    }
  }
}

const command = process.argv[2];

(async () => {
  if (command === 'down') {
    await undoSeeds()
    console.log('All seeds reverted')
  } else {
    await runSeeds()
    console.log('All seeds applied')
  }
  process.exit()
})();
