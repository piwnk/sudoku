const sudoku = require('sudoku-umd');
// const { convertBoardToObject } = require('./reducer');

const range = [...Array(100).keys()];

const boardIds = range.filter(i => (i > 10 && i % 10 !== 0));

const convertBoardToObject = board =>
  board.split('').map((value, i) => ({
    id: boardIds[i],
    value: value === '.' ? '' : value,
  }));

const convertBoardToString = board => board.map(i => (i.value.length > 0 ? i.value : '.')).join('');
// const convertBoardToString = board => board.map(i => console.log(i.value.length));

const boardStr = sudoku.generate('easy');

const boardObj = [
  { id: 93, value: '7' },
  { id: 94, value: '5' },
  { id: 95, value: '4' },
  { id: 96, value: '' },
  { id: 97, value: '6' },
  { id: 98, value: '3' },
  { id: 99, value: '9' },
];


// console.log(board);
// console.log(convertBoardToObject(boardStr));
console.log(convertBoardToString(boardObj));

