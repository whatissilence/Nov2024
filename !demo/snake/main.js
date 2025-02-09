'use strict';

const game = {
  constants: {
    BUTTONS: {
      ARROW_LEFT: 'ArrowLeft',
      ARROW_RIGHT: 'ArrowRight',
      ARROW_UP: 'ArrowUp',
      ARROW_DOWN: 'ArrowDown'
    }
  },
  config: {
    fieldSize: 20,
  },
  state: {
    pause: 500, // milliseconds - чим меньше, тим швидше рухається час
    direction: '',
    snake: [],
    hare: {},
    alive: true,
    score: 0,

  }
}

game.state.direction = game.constants.BUTTONS.ARROW_RIGHT;

init(game);