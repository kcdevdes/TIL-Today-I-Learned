import React, { Component } from 'react';

class AboutMe extends Component {
  // when props are missed, or omitted intentionally
  // this defaultProps works as props instead.
  static defaultProps = {
    name: "this is my name!"
  }

  render() {
    return (
      <div>
        Hello! My name is <b>{this.props.name}</b>! Nice to meet you!
      </div>
    );
  }
}

// AboutMe.defaultProps = {
//   name: "this is my name"
// }

export default AboutMe;