'use strict';

// Функція малює поле
function drawField(game) {
  let fieldHtml = '<table class="game-field">';
  for(let y = 1; y <= game.config.fieldSize; y++) {
    fieldHtml += '<tr>';
    for(let x = 1; x <= game.config.fieldSize; x++) {
      fieldHtml += `<td id="cell-${x}-${y}"></td>`
    }
    fieldHtml += '</tr>';
  }

  fieldHtml += '</table>';

  document.getElementById('game-div').innerHTML = fieldHtml;
}

// Функція малює одну ячейку змії по координаті
function drawSnakeCell(x, y) {
  document.getElementById(`cell-${x}-${y}`)?.classList.add('snake');
}

// Функція видаляє одну ячейку змії по координаті
function removeSnakeCell(x, y) {
  document.getElementById(`cell-${x}-${y}`)?.classList.remove('snake');
}

// Функція малює одну ячейку зайця по координаті
function drawHareCell(x, y) {
  document.getElementById(`cell-${x}-${y}`)?.classList.add('hare');
}

// Функція видаляє одну ячейку зайця по координаті
function removeHareCell(x, y) {
  document.getElementById(`cell-${x}-${y}`)?.classList.remove('hare');
}
