const range = [...Array(100).keys()];
const boardIds = range.filter(i => (i > 10 && i % 10 !== 0));

export const convertBoardToObject = board =>
  board.split('').map((value, i) => ({
    id: boardIds[i],
    value: value === '.' ? '' : value,
  }));

export const convertBoardToString = board =>
  board.map(item => (
    item.value.length > 0 ? item.value : '.')).join('');
