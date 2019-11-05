import React, {Component} from 'react'


const TableBody = props => {
  const rows = props.datas.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <button onClick={() => props.removeData(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  
  render() {
    const {  datas, removeData } = this.props

    return (
      <table className="table">
        <TableBody dataTableBody = {datas} removeData={removeData}/>
      </table>
    )
  }
}

export default Table;
