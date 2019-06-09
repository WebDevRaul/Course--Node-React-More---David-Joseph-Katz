import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../actions/publicDragons';

class PublicDragons extends Component {

  componentDidMount() {
    this.props.fetchPublicDragons();
  }
  render() {
    return (
      <div>
        <h3>Public Dragons</h3>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  publicDragons: state.publicDragons
});

export default connect(mapStateToProps, { fetchPublicDragons })(PublicDragons)