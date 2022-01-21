import { Table } from "react-bootstrap";

const TableTransaction = ({children}) => {
  return(
    <Table striped bordered hover variant="dark" responsive="md">
      <thead style={{color : '#EE4622'}}>
        <tr>
          <th>No</th>
          <th>Users</th>
          <th>Bukti Transfer</th>
          <th>Remaining Active</th>
          <th>Status User</th>
          <th>Status Payment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  )
}
export default TableTransaction;