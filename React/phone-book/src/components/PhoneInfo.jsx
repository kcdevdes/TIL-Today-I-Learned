import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'static',
      phone: '0000000000',
      id: 0
    }
  }

  state = {
    isEditing: false,
    name: '',
    phone: '',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    if (!prevState.isEditing && this.state.isEditing) {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.isEditing && !this.state.isEditing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padidng: '8px',
      margin: '8px'
    };

    const { isEditing } = this.state;
    const { name, phone, } = this.props.info;

    if (isEditing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder='Name'
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder='Phone Number'
              onChange={this.handleChange}
            ></input>
          </div>
          <button onClick={this.handleToggleEdit}>Apply</button>
          <button onClick={this.handleRemove}>Remove</button>
        </div>
      )
    }
    return (
      <div style={style} >
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default PhoneInfo;
