import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        datas: [
            {
              number1: 'learn react',
              number2: 'learn react',
              total: 1
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
        this.setState({datas: [...this.state.datas, data]});
        console.log(data);
    }

  render() {
    const { datas, total } = this.state
    return (
      <div>
        <div className="App">
            <h2>Todo App</h2>
            <span className="data__new">{total}</span>
            <Table dataTable={datas} removeData={this.removeData} total={total}/>
            <Form submitForm={this.submitForm} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
