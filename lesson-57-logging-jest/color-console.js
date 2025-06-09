import createDebug from 'debug';
import chalk from 'chalk';
import { logger } from './logger.js';

// DEBUG =============================
// unix                DEBUG=app:* node color-console.js
// win                 set DEBUG=app:* && node color-console.js
// win powershell      $env:DEBUG = "app:*"; node color-console.js

const debug = createDebug('app:main');
const debugDB = createDebug('app:db');

// Використовуємо іменовані екземпляри для логування
debug('Програма розпочала виконання');
debugDB('Виконано запит до бази даних');

// CHALK =============================

// Використовуємо chalk для кольорового виведення тексту в консоль
console.log(chalk.blue('Це повідомлення буде синього кольору'));
console.log(chalk.red.bold('Це повідомлення буде червоного кольору і жирним'));
console.log(chalk.green.bgWhite.underline('Це повідомлення буде зеленого кольору з білим фоном і підкресленням'));

// WINSTON =============================

// Використовуємо логер
logger.info('Це інформаційне повідомлення');
logger.error('Це повідомлення про помилку');


console.log('Змінні середовища:')
console.log(process.env)

console.log('Моя Env змінна:')
console.log(process.env.GROUP)