import React from 'react';
import { connect } from 'react-redux';

import {
  createBoard,
  solveBoard,
  resetBoard,
  undo,
  // redo,
  // checkBoard,
} from '../Board/actions';

import './style.css';

const mapDispatchToProps = {
  createBoard,
  solveBoard,
  resetBoard,
  undo,
  // redo,
};


const Button = ({ text, handleClick }) => (
  <button
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
      />
      <Button
        text="redo"
        handleClick={props.redo}
      />
    </div>
  </div>
);

export default connect(undefined, mapDispatchToProps)(Buttons);
