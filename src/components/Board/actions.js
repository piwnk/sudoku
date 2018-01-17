
export const CREATE_BOARD = 'CREATE_BOARD';
export const SOLVE_BOARD = 'SOLVE_BOARD';
export const RESET_BOARD = 'RESET_BOARD';


export const createBoard = difficulty => ({
  type: CREATE_BOARD,
  difficulty,
});

export const solveBoard = () => ({
  type: SOLVE_BOARD,
});

export const resetBoard = () => ({
  type: RESET_BOARD,
});
