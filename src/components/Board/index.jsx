import React, { Component } from 'react';
import { connect } from 'react-redux';

const test = 'abc';

const mapStateToProps = state => ({
  test,
});

const mapDispatchToProps = dispatch => ({
  test,
});


class Board extends Component {
  state = {

  }

  render() {
    return (
      <div className="section" />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
