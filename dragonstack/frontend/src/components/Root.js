import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componets
import Home from './Home';
import AuthForm from './AuthForm';

class Root extends Component {
  render() {
    return (
      this.props.account.loggedIn ? <Home /> : <AuthForm />
    )
  }
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect( mapStateToProps, {} )(Root);