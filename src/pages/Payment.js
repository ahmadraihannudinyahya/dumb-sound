import { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import ApiServices from "../Api/ApiServices";

const Payment = () => {
  const [inputs, setInputs] = useState({
    accountNumber : '',
    attache : null
  });

  const [alert, setAlert] = useState('');

  const handlePostTransaction = async () => {
    const formData = new FormData();
    formData.set('accountNumber', inputs.accountNumber);
    formData.append('attache', inputs.attache);
    const error = await ApiServices.postTransaction(formData);
    if(error){
      setAlert(error);
    }
  };
  return(
    <Container fluid style = {{paddingTop : '120px', backgroundColor : '#161616', height : '100vh', color : '#fff', textAlign : 'center'}}>
      <h2 className="m-5">Premium</h2>
      {alert? <Alert variant="danger">{alert}</Alert>:<></>}
      <p>Bayar sekarang dan nikmati streaming music yang kekinian dari <b><span style={{color : '#EE4622'}}>DUMB</span>SOUND</b> </p>
      <p><b><span style={{color : '#EE4622'}}>DUMB</span>SOUND : 0981312323</b></p>
      <Row className="justify-content-md-center">
        <Col md={3}>
        <Form.Control onChange={(e)=>setInputs({...inputs,accountNumber : e.target.value })} style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)',marginBottom : 20}} type="text" placeholder="Input your account number"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={3}>
        <Form.Label htmlFor="attache" style ={{width : '100%', textAlign : 'left', color : '#EE4622', fontWeight : 'bold'}} className="btn btn-outline-light">Attache proof of transfer</Form.Label>
        </Col>
      </Row>
      <Form.Control onChange={(e) => setInputs({...inputs, attache : e.target.files[0]})} id="attache" type="file" className = "d-none"/>
      <Row className="justify-content-md-center mt-4">
        <Col md={3}>
        <Button onClick={handlePostTransaction} style = {{backgroundColor : '#F58033', color : '#fff', fontWeight : 'bold', border : '0', textAlign : 'center', width : '100%'}}>Send</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Payment;