import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        datas: [
            {
                name: 'learn react'
            },
            {
                name: 'learn Html'
            },
            {
                name: 'learn CSS'
            },
            {
                name: 'learn JS'
            },
        ],
    }

    removeData = index => {
        const {datas} = this.state

        this.setState({
            datas: datas.filter((data, i) => {
                return i !== index
            }),
        })
    }

    submitForm = data => {
        this.setState({datas: [...this.state.datas, data]})
    }
  render() {
    const { datas } = this.state
    
    return (
      <div>
        <div className="App">
            <h2>Todo App</h2>
            <Table dataTable = {datas} removeData={this.removeData}/>
            <Form submitForm = {this.submitForm} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
