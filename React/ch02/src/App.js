import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '26px',
    };

    return (
      <div style={style}>
        Hi there!
      </div>
    );
  }
}

export default App;