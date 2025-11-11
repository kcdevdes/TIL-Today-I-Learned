import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);
    console.log("Hello World!");
    setTimeout(this.handleData, 1000);
  }

  handledata (){
    const data = 'new data';
    const { formData } = this.state;
    this.setState({
      loading: false,
      formdata: data + formData,
    });
    console.log("value of loading variable", this.state.loading);
  }

  render() {
    return (
      <div>
        <div>Hello Test!</div>
        <b>Loading : {String(this.state.loading)}</b>        
        <b>Result : {this.state.formData}</b>
      </div>
    );
  }
}

export default StateExample;
