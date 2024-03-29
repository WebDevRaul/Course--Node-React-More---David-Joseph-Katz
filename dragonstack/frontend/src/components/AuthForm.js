import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchState';

class AuthForm extends Component {
  state = { username: '', password: '', buttonClicked: false };

  updateUsername = e => {
    this.setState({ username: e.target.value })
  };
  updatePassword = e => {
    this.setState({ password: e.target.value })
  };
  
  signup = () => {
    this.setState({ buttonClicked: true });
    const { username, password } = this.state;
    
    this.props.signup({ username, password })
  }
  
  login = () => {
    this.setState({ buttonClicked: true });
    const { username, password } = this.state;
    
    this.props.login({ username, password });
  }

  get Error() {
    if (
      this.state.buttonClicked &&
      this.props.account.status === fetchStates.error
      ) {
      return <div>{this.props.account.message}</div>
    }
  }
   
  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>
        <FormGroup>
          <FormControl
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.updateUsername}
          />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.updatePassword}
          />
        </FormGroup>
        <div>
          <Button onClick={this.login} >Log In</Button>
          <span> or </span>
          <Button onClick={this.signup} >Sign Up</Button>
        </div>
        <br />
        {this.Error}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect( mapStateToProps, { signup, login } )(AuthForm);