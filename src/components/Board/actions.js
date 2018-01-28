import sudoku from 'sudoku-umd';

import {
  convertBoardToObject,
  convertBoardToString,
} from './utils';

export const CREATE_BOARD = 'CREATE_BOARD';
export const SOLVE_BOARD = 'SOLVE_BOARD';
export const RESET_BOARD = 'RESET_BOARD';
export const UPDATE_TILE = 'UPDATE_BOARD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';


export const createBoard = (difficulty) => {
  const newBoardAsString = sudoku.generate(difficulty);
  const solvedBoardAsString = sudoku.solve(newBoardAsString);
  return {
    type: CREATE_BOARD,
    difficulty,
    newBoard: convertBoardToObject(newBoardAsString),
    solvedBoard: convertBoardToObject(solvedBoardAsString),
    startTime: new Date(),
  };
};

export const solveBoard = () => ({
  type: SOLVE_BOARD,
});

export const resetBoard = () => ({
  type: RESET_BOARD,
});

export const updateTile = (tileId, value) => ({
  type: UPDATE_TILE,
  tileId,
  value,
});

export const undo = () => ({
  type: UNDO,
});

export const redo = () => ({
  type: REDO,
});
