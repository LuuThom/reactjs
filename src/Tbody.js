import React, {Component} from 'react';
class Tbody extends Component {
    render() {
        const { data } = this.props;
        return (
          <tr key={data.index}>
            <td><i className="fa fa-check"></i></td>
            <td>{data.name}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        )
  };
}
