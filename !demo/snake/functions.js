'use strict';

// Функція підписується на натискання кнопок
function initUserInput(game) {
  document.getElementsByTagName('body')[0].addEventListener('keydown', (event) => {
    const BUTTONS = game.constants.BUTTONS;
    const buttonValues = Object.values(game.constants.BUTTONS);

    const currentDirection = game.state.direction;
    const newDirection = event.code;

    // Аналізуємо, чи користувач нажав протилежний напрямок
    const isOppositeDirection = (
      newDirection === BUTTONS.ARROW_UP && currentDirection === BUTTONS.ARROW_DOWN
      || newDirection === BUTTONS.ARROW_DOWN && currentDirection === BUTTONS.ARROW_UP
      || newDirection === BUTTONS.ARROW_LEFT && currentDirection === BUTTONS.ARROW_RIGHT
      || newDirection === BUTTONS.ARROW_RIGHT && currentDirection === BUTTONS.ARROW_LEFT
    );

    // Якщо користувач нажав протилежний напрямок або якусь кнопку окрім тих, що ми зазначили у параметрах, не реагуємо
    if (isOppositeDirection || !buttonValues.includes(newDirection)) {
      return;
    }

    // Виставляємо новий напрямок руху змії
    console.log(newDirection);
    game.state.direction = newDirection;
  })
}

// Ініціалізуємо змію. Додаємо координати у масив та викликаємо малювання змії для кожної ячейки
function initSnake(game) {
  const snakeX = 2;
  const middleOfBoardY = Math.floor(game.config.fieldSize / 2);

  game.state.snake = [
    { x: snakeX, y: middleOfBoardY },
    { x: snakeX + 1, y: middleOfBoardY },
    { x: snakeX + 2, y: middleOfBoardY } // head
  ];

  game.state.snake.forEach(cell => drawSnakeCell(cell.x, cell.y))
}

// Виставляємо зайця
// Тут є проблема, якщо буде багато змії та мало місця, цикл може крутитися дуже довго
// Я б переробив цю перевірку. Робив масив вільних ячеек та обирав рандомом одну з них
function setHare(game) {
  let x, y;
  while(true) {
    // Генеруємо нові координати зайця
    x = Math.ceil(Math.random() * game.config.fieldSize);
    y = Math.ceil(Math.random() * game.config.fieldSize);

    // Перевіряємо. Якщо ті координати попали в тіло змії, то просто крутимося у циклі
    const isInSnake = game.state.snake.some(cell => cell.x === x && cell.y === y);
    if(!isInSnake) {
      // якщо попали не в змію, а на вільне місце, виходимо...
      break;
    }
  }

  // ... і виставляємо координати зайцю
  game.state.hare = {
    x: x,
    y: y
  };

  // рисуємо зайця
  drawHareCell(x, y);
}

// функція двигає змію
function moveSnake(game) {
  const snake = game.state.snake;
  const headBefore = snake[snake.length - 1];
  const BUTTONS = game.constants.BUTTONS;
  let headX = headBefore.x;
  let headY = headBefore.y;

  // Аналіз збереженого напрямку руху, куди саме нам її рухати
  switch (game.state.direction) {
    case BUTTONS.ARROW_UP:
      headY--;
      break;
    case BUTTONS.ARROW_DOWN:
      headY++;
      break;
    case BUTTONS.ARROW_LEFT:
      headX--;
      break;
    case BUTTONS.ARROW_RIGHT:
      headX++;
      break;
  }

  // Перевірка на смерть, чи змія укусила себе за хвіст
  const isSnakeCollision =
    game.state.snake.some(cell => cell.x === headX && cell.y === headY);

  // так, укусила, напишемо про це
  if (isSnakeCollision) {
    console.log(`SNAKE BIT IT'S OWN TAIL`);
  }

  // Якщо змія укусила себе, або вдарилася носом в стіну, ставимо змінну чиЖива в false, та виводимо месседж.
  // Далі змію не рухаємо, гра закінчена
  if (isSnakeCollision
  || headX > game.config.fieldSize
    || headX < 1
    || headY > game.config.fieldSize
    ||headY < 1
  ) {
    game.state.alive = false;
    console.log('SNAKE IS DEAD!!!!');
    return;
  }

  // Зміна логічної частини голови змії
  snake.push({
    x: headX,
    y: headY
  });

  // Намалювали голову
  drawSnakeCell(headX, headY);

  // Перевіряємо, чи зʼїли зайця,
  const isHareEaten = processHareEaten(game);

  // Якщо не зʼїли стираємо 1 частину хвосту. Якщо зʼїли, цього не робимо. Таким чином змія виросте на одну ячейку
  if (!isHareEaten) {
    const deletedTail = snake.shift();
    removeSnakeCell(deletedTail.x, deletedTail.y);
  }
}

// Перевіряємо, чи зʼїли зайця, обробляємо зʼїдання, вертаємо true, якщо зʼїли, чи false, якщо ні
// Краще розбити на дві функції, аналіз, та процессінг
function processHareEaten(game) {
  const snake = game.state.snake;
  const head = snake[snake.length -1];
  const hare = game.state.hare;

  // Якщо зайця зʼїли, видаляємо поточного зʼїденого зайця, робимо нового
  if (head.x === hare.x && head.y === hare.y) {
    removeHareCell(game.state.hare.x, game.state.hare.y);
    setHare(game);
    return true;
  }

  return false;
}

// Функція засинає на визначений час в мілісекундах щоб користувач встиг зреагувати і нажати необхідні кнопки
async function sleep(timeout) {
  await new Promise(r => setTimeout(r, timeout));
}

// Функція робить паузу та рухає змію
async function go(game) {
  while(game.state.alive) {
    await sleep(game.state.pause);
    moveSnake(game);
  }
}

// Функція виставляє усі параметри, малює початкове положення змії, зайця, та запускає гру
function init(game) {
  drawField(game);
  initUserInput(game);
  initSnake(game);
  setHare(game);
  go(game);
}




