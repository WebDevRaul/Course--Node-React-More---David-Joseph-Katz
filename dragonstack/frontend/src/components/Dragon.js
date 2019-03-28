import React, { Component} from 'react';
import DragonAvatar from './DragonAvatar';

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
    return <DragonAvatar dragon={this.state.dragon} />;
  }
};

export default Dragon;