import React, { Component} from 'react';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

class Dragon extends Component {
  state = { dragon: DEFAULT_DRAGON }

  componentDidMount() {
    this.fetchDragon();
  };

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
      .then(res => res.json())
      .then(json => this.setState({ dragon: json.dragon }))
      .catch(err => console.log(err));
  };

  render() {
    const { generationId, dragonId, nickname, birthdate, traits } = this.state.dragon;

    return(
      <div>
        <span>G.{generationId}</span>
        <span>I{dragonId}.</span>
        {traits.map(i => i.traitValue).join(', ')}
      </div>
    )
  }
};

export default Dragon;