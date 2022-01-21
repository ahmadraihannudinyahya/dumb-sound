import { Dropdown } from "react-bootstrap";

const BodyTableTransaction = ({id, attache, status, user, remainingActive, index, handleAproveTransaction, handleCancelTransaction}) => {
  const statusUser = remainingActive !== 0? 'Active' : 'Not Active' ;
  const statusPaymenStyleColor = () => {
    if(status === 'pending'){
      return '#F7941E'
    };
    if(status === 'approve'){
      return '#0ACF83';
    };
    return '#FF0742'
  };
  return(
    <tr>
      <td>{index + 1}</td>
      <td>{user.fullname}</td>
      <td>{attache}</td>
      <td>{remainingActive}/hari</td>
      <td style={{color : statusUser === 'Not Active' ? '#FF0742' : '#0ACF83'}}>{statusUser}</td>
      <td style={{color : statusPaymenStyleColor()}}>{status}</td>
      <td style={{textAlign : 'center'}}>
        {status !== 'pending' ? '-' :
          <Dropdown>
            <Dropdown.Toggle split variant="link" id="dropdown-split-basic" />
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={()=>handleAproveTransaction(id)} style={{color : '#0ACF83'}}>Approved</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCancelTransaction(id)} style={{color : '#FF0000'}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }
      </td>
    </tr>
  )
}
export default BodyTableTransaction;