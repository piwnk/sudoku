import React from 'react';
import { connect } from 'react-redux';

import {
  createBoard,
  solveBoard,
  resetBoard,
  undo,
  redo,
  // checkBoard,
} from '../Board/actions';

import './style.css';


const Button = ({ text, handleClick, disabled }) => (
  <button
    className={disabled ? 'disabled' : ''}
    onClick={handleClick}
  >{text.toUpperCase()}
  </button>
);


const Buttons = props => (
  <div>
    <div className="buttons">
      <Button
        text="create"
        handleClick={() => props.createBoard('easy')}
      />
      <Button
        text="solve"
        handleClick={props.solveBoard}
      />
      <Button
        text="reset"
        handleClick={props.resetBoard}
      />
      <Button
        text="check"
        handleClick={props.checkBoard}
      />
      <Button
        text="undo"
        handleClick={props.undo}
        disabled={!props.undoStack.length}
      />
      <Button
        text="redo"
        handleClick={props.redo}
        disabled={!props.redoStack.length}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  undoStack: state.Board.undoStack,
  redoStack: state.Board.redoStack,
});

const mapDispatchToProps = {
  createBoard,
  solveBoard,
  resetBoard,
  undo,
  redo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
