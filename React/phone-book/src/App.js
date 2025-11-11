import './App.css';
import React, { Component } from 'react';
import Dummy from './Dummy';

import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  state = Dummy
  id = 3

  handleCreate = (data) => {
    const { information } = this.state;
    // NEVER use .push method to add data to an array in React
    // user .concat, slice, map, filter methods to get a new array from an old array.
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id // attempts to update the object having the same id
          ? { ...info, ...data } // creates a new object that contains previous values and received values
          : info // or keeps the current values
      )
    })
  }

  render() {
    console.log(this.state.information);
    return (
      <div className='App'>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
