import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import ApiServices from "../Api/ApiServices";
const AddArtis = () => {
  const [alert, setAlert] = useState({
    message : '',
    variant : 'danger',
  });
  const [inputs, setInputs] = useState({
    name : '', 
    old : '', 
    type : '', 
    startCarrer : '', 
  });

  const clearInputs = () => {
    setInputs({
      name : '', 
      old : '', 
      type : '', 
      startCarrer : '', 
    });
  };
  const handleAddArtis = async () => {
    const error = await ApiServices.postArtis(inputs);
    if(error){
      return setAlert({message : error, variant : 'danger'});
    }
    setAlert({message : 'Artis Added', variant : 'success'});
    clearInputs();
  };
  return(
    <>
      <Container fluid style = {{backgroundColor : "#161616", minHeight : '90vh'}} className = "p-5">
        <h3 className="mb-5" style={{color : '#fff'}}>Add Artis</h3>
        {alert.message? <Alert variant ={alert.variant}>{alert.message}</Alert> : <></>}
        
        <Form.Control 
          style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)',marginBottom : 20}} 
          type="text" 
          placeholder="Name" 
          value = {inputs.name}
          onChange = {(e) => setInputs({...inputs,name : e.target.value})}/>
        <Form.Control style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)',marginBottom : 20}} type="text" placeholder="Old" value={inputs.old} onChange = {(e) => setInputs({...inputs,old : e.target.value})}/>
        <Form.Select style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)',marginBottom : 20}} value={inputs.type} onChange = {(e) => setInputs({...inputs,type : e.target.value})}>
          <option style={{backgroundColor : 'grey', color : 'white'}} value = ''>Choose</option>
          <option style={{backgroundColor : 'grey', color : 'white'}} value = "solo">Solo</option>
          <option style={{backgroundColor : 'grey', color : 'white'}} value = "band">Band</option>
        </Form.Select>
        <Form.Control style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)',marginBottom : 20}} type="text" placeholder="Start Carrer" value={inputs.startCarrer} onChange = {(e) => setInputs({...inputs,startCarrer : e.target.value})}/>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <Button onClick = {handleAddArtis} style = {{backgroundColor : '#F58033', color : '#fff', fontWeight : 'bold', border : '0', textAlign : 'center', width : '100%'}}>Add Artis</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default AddArtis;