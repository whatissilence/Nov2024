import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { Transform } from 'node:stream';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('import.meta.url: ', import.meta.url)
console.log('__filename ', __filename)
console.log('__dirname ', __dirname)


const myTransformStream = new Transform({
  transform: function (data, enc, cb) {
    const processedData = data.toString().replaceAll('і', '1').toUpperCase();
    this.push(processedData);
    cb();
  },
});

// Створюємо потік читання
const readStream = fs.createReadStream(path.join(__dirname, 'source.txt'));

// Створюємо потік запису
const writeStream = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

// Передача даних з потоку читання в потік запису
readStream.pipe(myTransformStream).pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log('Новий шматок даних отримано:', chunk.toString());
});

myTransformStream.on('data', (chunk) => {
  console.log('Transform:', chunk.toString());
})

writeStream.on('finish', () => {
  console.log('Дані успішно записані до destination.txt');
});

readStream.on('error', (err) => {
  console.error('Сталася помилка під час читання файлу:', err);
});

writeStream.on('error', (err) => {
  console.error('Сталася помилка під час запису файлу:', err);
});