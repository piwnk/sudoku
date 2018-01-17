import sudoku from 'sudoku-umd';

import {
  CREATE_BOARD,
  SOLVE_BOARD,
  RESET_BOARD,
} from './actions';

const initialState = {
  initialBoard: '',
  board: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const newBoard = sudoku.generate(action.difficulty);
      return {
        ...state,
        initialBoard: newBoard,
        board: newBoard,
      };
    case SOLVE_BOARD:
      return {
        ...state,
        board: sudoku.solve(state.board),
      };
    case RESET_BOARD:
      return {
        ...state,
        board: state.initialBoard,
      };

    default:
      return state;
  }
};
