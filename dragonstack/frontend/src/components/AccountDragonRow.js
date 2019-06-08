import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// Components
import DragonAvatar from './DragonAvatar';

// Config
import { BACKEND } from '../config';

export default class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    edit: false
  };
  updateNickname = e => {
    this.setState({ nickname: e.target.value });
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
        dragonId: this.props.dragon.dragonId, nickname: this.state.nickname
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
        {
          this.state.edit ? this.saveButton : this.editButton
        }
      </div>
    );
  };
};