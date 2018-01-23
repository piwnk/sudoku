import React, { Component } from 'react';

import Numpad from '../Numpad';

import './style.css';

export default class extends Component {
  state = {
    showNumpad: false,
  }

  numpadOff = () => this.setState({
    showNumpad: false,
  });

  numpadOn = () => this.setState({
    showNumpad: true,
  });

  toggleNumpad = () => this.setState(current => ({
    showNumpad: !current.showNumpad,
  }));

  pickNumber = (number) => {
    this.props.setValue(this.props.id, number);
    console.log(`Tile: ${this.props.id}, ${number}`);
    this.numpadOff();
  }

  renderNumpad = (
    <Numpad
      handleMouseClick={this.pickNumber}
      handleMouseLeave={this.numpadOff}
    />
  )

  render() {
    const {
      id, value, initial, correct,
    } = this.props;
    const [row, column] = id.toString();
    // console.log(this.state.showNumpad, initial, value);
    return (
      <div
        className={
          `tile
          ${initial ? ' initial' : ''}
          ${column % 3 ? '' : ' border-right'}
          ${row % 3 ? '' : ' border-bottom'}`
        }
        onClick={this.numpadOn}
      >
        {value}
        {!initial && this.state.showNumpad ? this.renderNumpad : console.log('off')}
      </div>
    );
  }
}
