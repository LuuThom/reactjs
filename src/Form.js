import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      number1: 0,
      number2: 0,
      total: 0
    }

    this.state = this.initialState
  }

  dataChange = event => {
    const { name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  // dataChangeSum = () => {
  //   this.set
  // }

  // total = () => {
  //   const {number1, number2, total} = this.state;
  //   this.setState((total) => {
  //     return { total: (parseInt(number1)+parseInt(number2)) }
  //   });
  //   console.log(total);
  // }

  addData = () => {
    const{number1, number2} = this.state;
    this.setState({'total' : parseInt(number1) + parseInt(number2)}, () => {
      this.setState(this.initialState);
      this.props.submitForm(this.state);
    });
  }

  // sum = () => {
  //   this.setState({ sum: this.state.number1})
  //   this.props.submitForm(this.state)
  //   this.setState(this.initialState)
  // }

  render() {
    const { number1, number2 } = this.state;

    return (
      // <form>
      //   <input
      //     type='text'
      //     name="name"
      //     placeholder='add new todo...'
      //     value={name}
      //     onChange={this.dataChange} />
      //   <input type="button" value="Submit" onClick={this.addData} />

      // </form>
      <form>
        <input type="text" name="number1" value={number1} onChange={this.dataChange}/>
        <input type="text" name="number2" value={number2} onChange={this.dataChange}/>
        {/* <input type="hidden" name="number2" value={sum} onChange={this.dataChangeSum}/> */}
        <input type="button" value="Add" onClick={this.addData} />
      </form>
    )
  }
}

export default Form;
