import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import PublicDragonRow from './PublicDragonRow';

// Redux
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../actions/publicDragons';
import { fetchAccountDragons } from '../actions/accountDragons';

class PublicDragons extends Component {

  componentDidMount() {
    this.props.fetchPublicDragons();
    this.props.fetchAccountDragons();
  }
  render() {
    return (
      <div>
        <h3>Public Dragons</h3>
        {
          this.props.publicDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <PublicDragonRow dragon={dragon} />
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  publicDragons: state.publicDragons
});

export default connect(mapStateToProps, { fetchPublicDragons, fetchAccountDragons })(PublicDragons)