import React, { Component } from 'react';

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonId, traits } = this.props.dragon;

    return(
      <div>
        <span>G.{generationId}</span>
        <span>I{dragonId}.</span>
        {traits.map(i => i.traitValue).join(', ')}
      </div>
    )
  }
};

export default DragonAvatar;