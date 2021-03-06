import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container, Row , Col, Spinner} from 'react-bootstrap';
import ApiServices from "../Api/ApiServices";

const AddMusic = () => {
  const [alert, setAlert] = useState({
    message : '',
    variant : 'danger'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [singers, setSingers] = useState([]);
  const [inputs, setInputs] = useState({
    title : '', 
    year : '', 
    artisId : '', 
    thumbnail : null,
    attache : null
  });

  useEffect(()=>{
    getSinngers();
  }, []);

  const getSinngers = async () => {
    const data = await ApiServices.getArtis();
    setSingers(data);
  };

  const clearInput = () => {
    setInputs({
      title : '', 
      year : '', 
      artisId : '', 
      thumbnail : null,
      attache : null
    });
  };

  const handleAddMusic = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.set('title', inputs.title);
    formData.set('year', inputs.year);
    formData.set('artisId', inputs.artisId);
    formData.append('thumbnail', inputs.thumbnail);
    formData.append('attache', inputs.attache);
    const error = await ApiServices.postMusic(formData);
    if(error){
      setIsLoading(false);
      return setAlert({message : error, variant : 'danger'});
    };
    setAlert({message : 'music added', variant : 'success'});
    clearInput();
    setIsLoading(false);
  }
  return(
    <>
      <Container fluid style = {{backgroundColor : "#161616", minHeight : '100vh', paddingTop : '120px'}} className = "p-5">
        <h3 className="mb-5" style = {{color : '#fff'}}>Add Music</h3>
        {alert.message? <Alert variant={alert.variant}>{alert.message}</Alert> : <></>}
        <Row>
          <Col sm={10}>
            <Form.Control 
            style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)'}}
            type="text" 
            placeholder="Title" 
            value ={inputs.title}
            onChange={(e) => setInputs({...inputs, title : e.target.value})}/>
          </Col>
          <Col sm={2}>
            <Form.Label htmlFor="thumbnail" className="btn btn-outline-light" style ={{width : '100%', backgroundColor : 'rgba(210, 210, 210, 0.25)'}}>
              Attach Thumbnail
              <img src="/attach.png" alt='icon' style={{marginLeft : '10px', height:'20px'}}/>
            </Form.Label>
          </Col>
        </Row>
        <Form.Control 
          style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)'}}
          type="number" 
          placeholder="Year" 
          value = {inputs.year}
          onChange={(e) => setInputs({...inputs, year : e.target.value})} 
          className = "mb-2"
        />
        <Form.Select 
          style = {{backgroundColor : 'rgba(210, 210, 210, 0.25)', color : 'rgba(210, 210, 210, 1)'}}
          onChange={(e) => setInputs({...inputs, artisId : e.target.value})} 
          className = "mb-2"
          value = {inputs.artisId}
        >
          <option value='' style={{backgroundColor : 'grey', color : 'white'}}>Singer</option>
          {singers.map(artis => <option style={{backgroundColor : 'grey', color : 'white'}} value = {artis.id} key = {artis.id}>{artis.name}</option>)}
        </Form.Select>
        <Row>
          <Col lg={2}>
            <Form.Label htmlFor="attache" style ={{width : '100%', backgroundColor : 'rgba(210, 210, 210, 0.25)'}} className="btn btn-outline-light">Attache</Form.Label>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <Button onClick={handleAddMusic} style = {{backgroundColor : '#F58033', color : '#fff', fontWeight : 'bold', border : '0', textAlign : 'center', width : '100%'}} disabled = {isLoading ? true: false}>
            {isLoading ?<Spinner as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true" /> : 'Add Song' }
            </Button>
          </Col>
        </Row>
        <Form.Control  id="thumbnail" type="file" onChange={(e) => setInputs({...inputs, thumbnail : e.target.files[0]})} className = "d-none"/>
        <Form.Control id="attache" type="file" onChange={(e) => setInputs({...inputs, attache : e.target.files[0]})} className = "d-none"/>        
      </Container>
    </>
  )
}
export default AddMusic;