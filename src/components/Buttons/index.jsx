import React from 'react';
import { connect } from 'react-redux';

import {
  createBoard,
  solveBoard,
  resetBoard,
} from '../Board/actions';

const mapDispatchToProps = {
  createBoard,
  solveBoard,
  resetBoard,
};


const Button = ({ text, handleClick }) => (
  <button
    onClick={handleClick}
  >{text.toUpperCase()}
  </button>
);


const Buttons = props => (
  <footer>
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
    </div>
  </footer>
);

export default connect(undefined, mapDispatchToProps)(Buttons);
