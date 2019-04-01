import React, { Component } from 'react';
import { skinny, patchy, plain, slender, spotted, sporty, stocky, striped } from '../assests';

const propertyMap = {
  backgroundColor: {
    black: '#264338', 
    white: '#cfd8dc', 
    green: '#85d6a7', 
    blue: '#0277bd'
  },
  build: {slender, stocky, sporty, skinny},
  pattern: {plain, striped, spotted, patchy},
  size: {small: 100, medium: 140, large: 180, enormous: 220}
};

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