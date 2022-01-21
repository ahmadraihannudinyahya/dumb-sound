import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ApiServices from "../Api/ApiServices";
import BodyTableTransaction from "../component/ListTransaction/BodyTableTransaction";
import TableTransaction from "../component/ListTransaction/TableTransaction";

const ListTransactions = () => {
  const [listData, setListData] = useState([]);

  useEffect(()=>{
    fetchListData();
  }, []);

  const fetchListData = async () => {
    const data = await ApiServices.getTransaction();
    setListData(data);
  };

  const handleAproveTransaction = async (id) => {
    await ApiServices.putApproveTransaction(id);
    fetchListData();
  };
  const handleCancelTransaction = async (id) => {
    await ApiServices.putCancelTransaction(id);
    fetchListData();
  };
  return(
    <Container fluid style = {{backgroundColor : "#161616", minHeight : '90vh'}} className = 'pt-5 px-sm-1 px-md-5'>
      <h2 className="mb-5" style={{color : '#fff'}}>Incoming Transaction</h2>
      <TableTransaction>
        {listData.map((data, index) => <BodyTableTransaction key = {index} {...data} index = {index} handleAproveTransaction={handleAproveTransaction} handleCancelTransaction={handleCancelTransaction}/>)}
      </TableTransaction>
    </Container>
  );
};

export default ListTransactions;