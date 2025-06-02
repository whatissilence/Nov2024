import { resolve, basename, extname, join } from 'node:path';

const __dirname = import.meta.dirname;
console.log('__dirname', __dirname);

const filePath = '../lessons-41-styles/data/file.txt';

const absolutePath = resolve(__dirname, filePath);
console.log('absolutePath', absolutePath);


// Отримання імені файлу
const fileName = basename(absolutePath); // Витягнення імені файлу з абсолютного шляху
console.log('fileName', fileName); // Виведення імені файлу: file.txt

// Отримання розширення файлу
const fileExtension = extname(absolutePath); // Витягнення розширення файлу з абсолютного шляху
console.log('fileExtension', fileExtension); // Виведення розширення файлу: .txt

// Об'єднання шляхів
const dirPath = 'folder'; // Визначення імені директорії
const newPath = join(absolutePath, '..', dirPath); // Створення нового шляху, переходячи на рівень вище і потім у вказану директорію
console.log('newPath', newPath); // Виведення нового шляху: /Users/username/projects/myapp/folder
