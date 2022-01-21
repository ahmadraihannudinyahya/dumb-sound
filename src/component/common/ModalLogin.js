import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import ApiServices from "../../Api/ApiServices";

const ModalLogin = ({show, setShow, setShowRegister, setIslogin}) => {
  const [inputs, setInputs] = useState({
    email : '',
    password : '',
  });
  const [alert, setAlert] = useState('');

  useEffect(()=>{
    if(!show){
      setInputs({email : '',password : '',});
      setAlert('');
    }
  }, [show])

  const handleClose = () => setShow(false);
  const handleLogin = async () =>{
    const error = await ApiServices.postLoginUser(inputs);
    if(error){
      return setAlert(error);
    };
    setIslogin(true);
    handleClose()
  };
  const handlerSwitchModal = () =>{
    handleClose();
    setShowRegister(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Body style={{backgroundColor: '#161616',padding : '33px' }}>
          <h2 style={{color:'#fff', margin : '19px 0'}}>Login</h2>
          {alert?
          <Alert variant="danger">{alert}</Alert>:
          <></>
          }
          <Form.Control onChange = {(e)=> setInputs({...inputs, email : e.target.value})} type="text" placeholder="Email" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}} />
          <Form.Control onChange = {(e)=> setInputs({...inputs, password : e.target.value})} type="text" placeholder="Password" style ={{margin : '10px 0', backgroundColor : 'rgba(210, 210, 210, 0.25)', color : '#D2D2D2'}} />
          <Button onClick = {handleLogin} style={{width : '100%', margin : '21px 0', backgroundColor : '#EE4622', color : '#fff', border : 'none'}}>Login</Button>
          <p style={{color : '#B1B1B1', textAlign : 'center'}}>Don't have an account ? <b onClick={handlerSwitchModal} style={{cursor : 'pointer'}}>Klik Here</b></p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;