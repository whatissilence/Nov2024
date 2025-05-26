// Старий підхід
// import fs from 'node:fs';
//
// // Читання файлу
// fs.readFile('mockend.svg', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Помилка читання файлу:', err);
//     return;
//   }
//
//   fs.writeFile('copy-of-mock.svg', data, (err) => {
//     if (err) {
//       console.error('Помилка писання файлу:', err);
//       return;
//     }
//
//     fs.appendFile('copy-of-mock.svg', '\nThis row was added!!!!!!', (err) => {
//       if (err) {
//         console.error('Помилка писання файлу:', err);
//         return;
//       }
//
//       console.log('До файлу успішно додано');
//     })
//   })
// });


// ======================================================
// Проміси:

// import { readFile, writeFile, appendFile } from 'node:fs/promises';
//
// readFile('mockend.svg')
//   .then((data) => writeFile('copy-of-mock.svg', data))
//   .then(() => appendFile('copy-of-mock.svg', '\nThis row was added!!!!!!'))
//   .then(() => {
//     console.log('done')
//     // throw new Error('My Fake Error!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//
// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')



// ======================================================
// Проміси з async await:

// import { readFile, writeFile, appendFile } from 'node:fs/promises';
//
// const copyFileName = 'copy-of-mock.svg';
//
// try {
//   const data = await readFile('mockend.svg');
//   await writeFile(copyFileName, data);
//   await appendFile(copyFileName, '\nThis row was added!!!!!!');
//   console.log('done')
// } catch (e) {
//   console.error('Oooops!', e);
// }



// Видалити файл
// import { unlink } from 'node:fs/promises';
// const fileNameToDelete = 'functions.js';
//
// try {
//   await unlink(fileNameToDelete);
//   console.log('done')
// } catch (e) {
//   console.error('Oooops!', e);
// }



// Доступ
// import { access, constants } from 'node:fs/promises';
//
// try {
//   await access('mockend.svg', constants.R_OK | constants.W_OK); // read:0100 (4)   write: 0010(2)   read amd write:0110(6)
//   console.log('We have an access to mock');
// } catch (e) {
//   console.log('We don\'t access', e);
// }
//
// console.log('constants.R_OK', constants.R_OK)
// console.log('constants.W_OK', constants.W_OK)
// console.log('constants.R_OK | constants.W_OK', constants.R_OK | constants.W_OK)
// console.log('constants', constants)




// Список файлів
// import { readdir } from 'node:fs/promises';
//
// try {
//   const files = await readdir('./');
//   console.log('Files:\n', files);
// } catch (e) {
//   console.error('Oooops!', e);
// }




// Рекурсивний список файлів - імʼя та розмір
import { readdir, stat } from 'fs/promises'

async function listFiles(dirPath) {
  const files = await readdir(dirPath)

  for (const file of files) {
    const filePath = `${dirPath}/${file}`
    const stats = await stat(filePath)

    if (stats.isDirectory()) {
      await listFiles(filePath)
    } else {
      console.log(filePath.replace('//', '/'), stats.size);
    }
  }
}

await listFiles('../')

const stats = await stat('mockend.svg');
console.log('=========');
console.log('mockend.svg:\n', stats);
