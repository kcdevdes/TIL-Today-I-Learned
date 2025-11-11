import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <span>{name}</span> 
      </div>
    );
  }
}

MyComponent.propTypes = {
  name : PropTypes.string,
}

export default MyComponent;