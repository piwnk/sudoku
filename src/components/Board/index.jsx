import React, { Component } from 'react';
import { connect } from 'react-redux';

const test = 'abc';

const mapStateToProps = state => ({
  test,
});

const mapDispatchToProps = dispatch => ({
  test 
});

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  state = {
    a: 'asdf'
  }
  render = () => (
    <h1>Hello world</h1>
  )
}
