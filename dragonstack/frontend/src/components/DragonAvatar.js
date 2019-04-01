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
  get DragonImage() {
    const dragonPropertyMap = {};
    this.props.dragon.traits.map(i => {
      const { traitType, traitValue } = i;

      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const { backgroundColor, build, pattern, size } = dragonPropertyMap;

    return (
      <div className='dragon-avatar-image-wrapper'>
        <div className='dragon-avatar-image-background' style={{ backgroundColor, width: size, height: size }}>
          <img src={pattern} className='dragon-avatar-image-pattern' style={{ backgroundColor, width: size, height: size }} />
          <img src={build} className='dragon-avatar-image' style={{ width: size, height: size }}/>
        </div>
      </div>
    );
  }
  render() {
    const { generationId, dragonId, traits } = this.props.dragon;

    return(
      <div>
        <span>G.{generationId}</span>
        <span>I{dragonId}.</span>
        {traits.map(i => i.traitValue).join(', ')}
        {this.DragonImage}
      </div>
    )
  }
};

export default DragonAvatar;