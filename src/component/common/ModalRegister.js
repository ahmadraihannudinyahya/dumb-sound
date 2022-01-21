import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import ApiServices from "../../Api/ApiServices";

const ModalRegister = ({show, setShow, setShowLogin, setIslogin}) => {

  const [inputs, setInputs] = useState({
    email : '',
    password : '',
    fullname : '',
    gender : '',
    phone : '',
    address : '',
  });
  const [alert , setAlert] = useState('');

  const handleSubmitRegister = async () =>{
    const error = await ApiServices.postRegisterUser(inputs);
    if(error){
      return setAlert(error);
    };
    setIslogin(true);
    handleClose();
  };
  useEffect(()=>{
    if(!show){
      setInputs({ email : '', password : '', fullname : '', gender : '', phone : '', address : '', });
      setAlert('');
    }
  }, [show]);
  const handleClose = () => setShow(false);
  const handlerSwitchModal = () =>{
    handleClose();
    setShowLogin(true);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{backgroundColor: '#161616',padding : '33px' }}>
          <h2 style={{color:'#fff', margin : '19px 0'}}>Register</h2>
          {alert?
          <Alert variant="danger">{alert}</Alert>:
          <></>
          }
          <Form.Control onChange = {(e) => setInputs({...inputs,email : e.target.value})} type ="text" placeholder="Email" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}}/>
          <Form.Control onChange = {(e) => setInputs({...inputs,password : e.target.value})} type="password" placeholder="Password" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}}/>
          <Form.Control onChange = {(e) => setInputs({...inputs,fullname : e.target.value})} type="text" placeholder="Fullname" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}}/>
          <Form.Select onChange = {(e) => setInputs({...inputs,gender : e.target.value})} style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}}>
            <option style={{backgroundColor : 'grey', color : 'white'}}>Choose Gender</option>
            <option value = "male" style={{backgroundColor : 'grey', color : 'white'}}>Male</option>
            <option value = "female" style={{backgroundColor : 'grey', color : 'white'}}>Female</option>
          </Form.Select>
          <Form.Control onChange = {(e) => setInputs({...inputs,phone : e.target.value})} type="number" placeholder="Phone" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}}/>
          <Form.Control onChange = {(e) => setInputs({...inputs,address : e.target.value})} as="textarea" rows={3} placeholder="Address" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2', resize : 'none'}}/>
          <Button onClick={handleSubmitRegister}  style={{width : '100%', margin : '21px 0', backgroundColor : '#EE4622', color : '#fff', border : 'none'}}>Register</Button>
          <p style={{color : '#B1B1B1', textAlign : 'center'}}>Already have an account ? <b onClick={handlerSwitchModal} style={{cursor : 'pointer'}}>Klik Here</b></p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;