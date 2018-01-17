import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tile from '../Tile';

import { createBoard } from './actions';

import './style.css';

// import Numpad from '../Numpad';


const mapStateToProps = state => ({
  board: state.Board.board,
  initialBoard: state.Board.initialBoard,
});

const mapDispatchToProps = {
  createBoard,
};

// const Board = ({ board, initialBoard }) => (
class Board extends Component {
  componentWillMount() {
    this.props.createBoard('easy');
  }
  render() {
    return (
      <div className="board">
        {this.props.board.split('').map((value, i) => (
          <Tile
            key={i}
            id={i}
            value={value}
            initial={value === this.props.initialBoard[i]}
          />
    ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
