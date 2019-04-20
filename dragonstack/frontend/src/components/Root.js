import React, { Component } from 'react';

// Componets
import Home from './Home';
import AuthForm from './AuthForm';

class Root extends Component {
  render() {
    return (
      true ? <Home /> : <AuthForm />
    )
  }
}

export default Root;