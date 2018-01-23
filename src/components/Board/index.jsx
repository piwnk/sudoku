import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tile from '../Tile';

import {
  createBoard,
  updateTile,
} from './actions';

import './style.css';


const Solved = ({ timeDelta }) => (
  <div className="solved">
    <h1>You did it in {timeDelta} seconds</h1>
  </div>
);

const mapStateToProps = state => ({
  current: state.Board.current,
  initial: state.Board.initial,
  solved: state.Board.solved,
  startTime: state.Board.startTime,
  undoStack: state.Board.undoStack,
});

const mapDispatchToProps = {
  createBoard,
  updateTile,
};

class Board extends Component {
  componentWillMount() {
    this.props.createBoard('easy');
  }

  renderSolved = () => {
    const endTime = new Date();
    const diff = (endTime - this.props.startTime) / 1000;
    // console.log(Math.round(diff / 1000, 2));
    return <Solved timeDelta={diff} />;
  }

  render() {
    return (
      <div className="board">
        {this.props.current.map(({ id, value }, i) => (
          <Tile
            key={i}
            id={id}
            value={value}
            initial={!!(value && value === this.props.initial[i].value)}
            correct={(!!(value === this.props.solved[i].value))}
            setValue={this.props.updateTile}
            // setValue={() => console.log(`Values: ${value}, ${this.props.initialBoard[i].value}`)}
          />
        ))}
        {this.props.current === this.props.solved ? this.renderSolved() : ''}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
