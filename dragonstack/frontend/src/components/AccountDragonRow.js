import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// Components
import DragonAvatar from './DragonAvatar';

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
    return <Button>Save</Button>;
  };

  get editButton() {
    return <Button onClick={this.toggleEdit} >Edit</Button>;
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