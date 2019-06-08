import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { logout } from '../actions/account';

// Components
import Generation from './Generation';
import Dragon from './Dragon';
import AccountInfo from './AccountInfo';

class Home extends Component {
  render() {
    return (
      <div>
        <Button 
          onClick={this.props.logout} 
          className='logout-button'
          >Log out
        </Button>
        <h2>Dragon Stack test</h2>
        <Generation />
        <Dragon />
        <hr />
        <AccountInfo />
        <hr />
        <Link to='/account-dragons' >Account Dragons</Link>
    </div>
    );
  }
};

export default connect(null, { logout })(Home);