import React, { Component } from 'react';
import DragonAvatar from './DragonAvatar';
import { Button } from 'react-bootstrap';
import { BACKEND } from '../config';
import history from '../history';

// Components
import MatingOptions from './MatingOptions';

export default class PublicDragonRow extends Component {

  state = {
    displayMatingOptions: false
  }


  toggleDisplayMatingOption = () => {
    this.setState({ displayMatingOptions: !this.state.displayMatingOptions })
  };

  buy = () => {
    const { dragonId, saleValue } = this.props.dragon;
    fetch(`${BACKEND.ADDRESS}/dragon/buy`, {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ dragonId, saleValue })
    })
    .then(response => response.json())
    .then(json => {
      alert(json.message);
      if (json.type !== 'error') {
        history.push('/account-dragons');
      }
    })
    .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <div>{this.props.dragon.nickname}</div>
        <DragonAvatar dragon={this.props.dragon} />
        <div>
          <span>Sale Value: {this.props.dragon.saleValue}</span>{' | '}
          <span>Sire Value: {this.props.dragon.sireValue}</span>
          </div>
        <br />
        <Button onClick={this.buy} >Buy</Button>{' '}
        <Button onClick={this.toggleDisplayMatingOption}>Sire</Button>
        <br />
        {
          this.state.displayMatingOptions ? 
          <MatingOptions /> :
          <div></div>
        }
      </div>
    );
  };
};