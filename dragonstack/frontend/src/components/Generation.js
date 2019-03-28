import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' }

class Generation extends Component {
  state = {
    generation: { DEFAULT_GENERATION }
  };

  componentDidMount() {
    this.fetchGeneration();
  };

  fetchGeneration = () => {
    fetch('http://localhost:3000/generation')
      .then(res => res.json())
      .then(json => this.setState({ generation: json.generation }))
      .catch(err => console.log(err));
  };

  render() {
    const { generation } = this.state;
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on: </h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
};

export default Generation;