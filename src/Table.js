import React, {Component} from 'react'

const TableHead = ()=> {
  return (
    <thead>
      <tr>
        <td>Sub</td>
        <td>Pro</td>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.dataTableBody.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.number1}</td>
        <td>{row.number2}</td>
        <td>{row.total}</td>
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
    const {  dataTable, removeData, total } = this.props

    return (
      <table className="table">
        <TableHead/>
        <TableBody dataTableBody={dataTable} removeData={removeData} total={total}/>
      </table>
    )
  }
}

export default Table;
