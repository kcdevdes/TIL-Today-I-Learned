import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  /**
   * this controls the event of input 
   * when the text value is changed
   * @param {string} event 
   */
  handleChange = (event) => {
    this.setState({
      // initializes name as the value of each input
      // name : 'name', and 'phone'
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent reload
    // onCreate sends the current state to parent objects
    this.props.onCreate(this.state);
    // initialilzes state
    this.setState({
      name: "",
      phone: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
          <input
            placeholder='Phone Number'
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          ></input>
          <button type='submit'>Submit</button>
        </form>
          <div>Name : {this.state.name}</div>
          <div>Phone: {this.state.phone}</div>
      </div>
    );
  }
}

export default PhoneForm;
