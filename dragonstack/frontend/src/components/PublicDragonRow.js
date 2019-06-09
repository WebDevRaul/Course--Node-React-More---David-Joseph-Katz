import React, { Component } from 'react';
import DragonAvatar from './DragonAvatar';

export default class PublicDragonRow extends Component {
  render() {
    return (
      <div>
        <div>{this.props.dragon.nickname}</div>
        <DragonAvatar dragon={this.props.dragon} />
        <div>Sale Value: {this.props.dragon.saleValue}</div>
      </div>
    )
  }
}
