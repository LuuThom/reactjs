import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      name: ''
    }

    this.state = this.initialState
  }

  dataChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  addData = () => {
    this.props.dataChange(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <input
          type='text'
          placeholder='add new todo...'
          value={name}
          onChange={this.dataChange} />
        <button onClick={this.submitForm}></button>
      </form>
    )
  }
}

export default Form;