import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchAccountDragons } from '../actions/accountDragons';

// Components
import AccountDragonRow from './AccountDragonRow';

class AccountDragons extends Component {

  componentDidMount() {
    this.props.fetchAccountDragons()
  }

  render() {
    return (
      <div>
        <h3>Account Dragons</h3>
        {
          this.props.accountDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <AccountDragonRow dragon={dragon} />
                <hr />
                <Link to='/'>Home</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accountDragons: state.accountDragons
})

export default connect(mapStateToProps, { fetchAccountDragons })(AccountDragons)