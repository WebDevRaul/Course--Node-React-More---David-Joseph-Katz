import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

class MatingOptions extends Component {
  render() {
    return (
      <div>
        <h4>Pick one of your dragons to mate with:</h4>
        {
          this.props.accountDragons.dragons.map(dragon => {
            const { dragonId, generationId, nickname } = dragon;
            return (
              <span key={dragonId}>
                <Button>
                  G{generationId}.I{dragonId}. {nickname}
                </Button>
                {' '}
              </span>
            )
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  accountDragons: state.accountDragons
});

export default connect(mapStateToProps, {})(MatingOptions);