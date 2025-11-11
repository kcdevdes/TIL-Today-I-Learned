import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? 'going outside' : 'stay here'

    return (
      <div className='message-container'>
        {message}
      </div>
    );
  }
}

export default BooleanComponent;
