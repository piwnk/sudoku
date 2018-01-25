
export const CREATE_BOARD = 'CREATE_BOARD';
export const SOLVE_BOARD = 'SOLVE_BOARD';
export const RESET_BOARD = 'RESET_BOARD';
export const UPDATE_TILE = 'UPDATE_BOARD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';


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
