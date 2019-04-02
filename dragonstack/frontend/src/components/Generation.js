import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { generationActionCreator } from '../actions/generation';

const MINIMUM_DELAY = 3000;

class Generation extends Component {

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  };

  componentWillUnmount() {
    clearTimeout(this.timer)
  };

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime();
    if (delay  < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY
    };

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay );
  };

  render() {
    const { generation } = this.props;
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on: </h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
};
const fetchGeneration = () => dispatch => {
  return fetch('http://localhost:3000/generation')
    .then(res => res.json())
    .then(res => {
      dispatch(generationActionCreator(res.generation))
    })
    .catch(err => console.log('error', err));
}

const mapStateToProps = state => {
  const generation  = state.generation;

  return { generation };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchGeneration: generation => dispatch(
//       generationActionCreator(generation)
//     ),
//     fetchGeneration: () => fetchGeneration(dispatch)
//   }
// };

const componentConnector = connect(mapStateToProps, { fetchGeneration });

export default componentConnector(Generation);