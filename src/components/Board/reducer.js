import sudoku from 'sudoku-umd';

import {
  CREATE_BOARD,
  SOLVE_BOARD,
  RESET_BOARD,
  UPDATE_TILE,
  UNDO,
  REDO,
} from './actions';

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


const initialState = {
  initial: [],
  current: [],
  solved: [],
  startTime: new Date(),
  undoStack: [],
  redoStack: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const newBoard = sudoku.generate(action.difficulty);
      const solvedBoard = sudoku.solve(newBoard);
      const newBoardAsObject = convertBoardToObject(newBoard);
      const solvedBoardAsObject = convertBoardToObject(solvedBoard);
      return {
        ...state,
        current: newBoardAsObject,
        initial: newBoardAsObject,
        solved: solvedBoardAsObject,
        startTime: new Date(),
      };
    case SOLVE_BOARD:
      // const currentBoardAsString = convertBoardToString(state.board);
      return {
        ...state,
        current: state.solved,
      };
    case RESET_BOARD:
      return {
        ...state,
        current: state.initial,
      };
    case UPDATE_TILE:
      const updatedBoard = state.current.map(tile =>
        (tile.id !== action.tileId ? tile : {
          ...tile,
          value: action.value,
        }));
      return {
        ...state,
        current: updatedBoard,
        undoStack: [...state.undoStack, state.current],
        redoStack: [],
      };

    case UNDO:
      const undoRemainder = state.undoStack.length ? state.undoStack.slice(0, -1) : [];
      const redoExtended = [state.current, ...state.redoStack];
      const previous = state.undoStack.length ? state.undoStack.slice(-1)[0] : undefined;
      return !previous ? state : {
        ...state,
        undoStack: undoRemainder,
        redoStack: redoExtended,
        current: previous,
      };

    case REDO:
      const redoRemainder = state.redoStack.length ? state.redoStack.slice(1) : [];
      const undoExtended = [...state.undoStack.slice, state.current];
      const next = state.redoStack.length ? state.redoStack[0] : undefined;
      return !next ? state : {
        ...state,
        undoStack: undoExtended,
        redoStack: redoRemainder,
        current: next,
      };

    default:
      return state;
  }
};
