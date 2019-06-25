import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// Components
import DragonAvatar from './DragonAvatar';

// Config
import { BACKEND } from '../config';

export default class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    isPublic: this.props.dragon.isPublic,
    saleValue: this.props.dragon.saleValue,
    sireValue: this.props.dragon.sireValue,
    edit: false
  };
  updateNickname = e => {
    this.setState({ nickname: e.target.value });
  };

  updateSaleValue = e => {
    this.setState({ saleValue: e.target.value })
  };
  updateSireValue = e => {
    this.setState({ sireValue: e.target.value })
  };

  updateIsPublic = e => {
    this.setState({ isPublic: e.target.checked })
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  get saveButton() {
    return <Button onClick={this.save} >Save</Button>;
  };

  get editButton() {
    return <Button onClick={this.toggleEdit} >Edit</Button>;
  };

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(({
        dragonId: this.props.dragon.dragonId, 
        nickname: this.state.nickname,
        isPublic: this.state.isPublic,
        saleValue: this.state.saleValue,
        sireValue: this.state.sireValue
      }))
    }).then(response => response.json())
      .then(json => {
        if(json.type === 'error') {
          allert(json.message);
        } else {
          this.toggleEdit();
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div>
        <input 
          type='text'
          value={this.state.nickname}
          onChange={this.updateNickname}
          disabled={!this.state.edit}
        />
        <br />
        <DragonAvatar dragon={this.props.dragon} />
        <div>
          <span>
            Sale Value: {' '}
            <input 
              type='number'
              disabled={!this.state.edit}
              value={this.state.saleValue}
              onChange={this.updateSaleValue}
              className='account-dragon-row-input'
              />
          </span>
            {' '}
            <span>
              Sire Value:{' '}
              <input
                type='number'
                disabled={!this.state.edit}
                value={this.state.sireValue}
                onChange={this.updateSireValue}
                className='account-dragon-row-input'
              />
            </span>
            {' '}
          <span>
            Public: {' '}
            <input 
              type='checkbox' 
              disabled={!this.state.edit}
              checked={this.state.isPublic}
              onChange={this.updateIsPublic}
            />
          </span>
          {
            this.state.edit ? this.saveButton : this.editButton
          }
        </div>
      </div>
    );
  };
};