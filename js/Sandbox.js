import React, { Component } from 'react';
import Player from './Player';

export default class Sandbox extends Component {
  render() {
    const id = '123';
    // id={this.props.params.sandboxId}

    return (
      <Player id={id} />
    )
  }
}
