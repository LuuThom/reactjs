import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table'

class App2 extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
        <div className="container">
            <Table/>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App2 />, document.getElementById('root'))
