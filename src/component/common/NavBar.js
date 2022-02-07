import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, Dropdown, DropdownButton} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = ({isLogin, isAdmin ,setModaLogin, setModalRegister, setIslogin}) => {
  const [ background, setBackground ] = useState('');
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIslogin(false);
    history.push('/')
  };

  useEffect(()=>{
    if(isAdmin){
      setBackground('#1F1F1F');
    }else{
      window.addEventListener('scroll', () => {
        if(document.scrollingElement.scrollTop > 100) {
          setBackground('#1F1F1F');
        } else {
          setBackground('');
        };
      });
    }
  }, [isAdmin]);
  return(
    <Navbar variant="dark" fixed='top' expand="md" style = {{ backgroundColor : background}}>
      <Container fluid className="py-0 px-3">
        <Navbar.Brand onClick = {()=>history.push('/')} style={{cursor: 'pointer', marginLeft : '20px'}}>
          <img
            src="/Logo.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-md-end">
          {isLogin ? <>
          <Nav
            className="me-auro my-2 my-lg-0 d-none d-md-block"
            style={{ maxHeight: '100px' }}
          >
              <DropdownButton
                variant="link"
                title={<img src="profile.png" style={{width : '50px' , height : '50px'}} alt='profile' className="rounded-circle"/>}
                id="input-group-dropdown-1"
                drop= "down"
                align="end"
                menuVariant="dark"
              >
                {isAdmin ?
                <>
                  <Dropdown.Item onClick = {()=> history.push('/addmusic')}>
                    <img src="/addMusic.png" alt="bill" style={{marginRight : '10px'}}/>
                    Add Music
                  </Dropdown.Item>
                  <Dropdown.Item onClick = {()=> history.push('/addartis')}>
                    <img src="/addArtis.png" alt="bill" style={{marginRight : '10px'}}/>
                    Add Artis
                  </Dropdown.Item>
                </>:
                <>
                  <Dropdown.Item  onClick = {()=> history.push('/payment')}>
                    <img src="/bill.png" alt="bill" style={{marginRight : '10px'}}/>
                    Pay
                  </Dropdown.Item>
                </>
                }
                <Dropdown.Divider />
                <Dropdown.Item onClick = {handleLogOut}>
                  <img src="/logout.png" alt="bill" style={{marginRight : '10px'}}/>
                  Log Out
                </Dropdown.Item>
              </DropdownButton>
          </Nav>

          <Nav
            className="me-auro my-2 my-lg-0 d-md-none"
            style={{ maxHeight: '100px' }}
          >
            {isAdmin? <>
              <Button onClick = {()=> history.push('/addmusic')} variant="outline-light" className="me-2 px-4 my-2">Add Music</Button>
              <Button onClick = {()=> history.push('/addartis')} variant="outline-light" className="me-2 px-4 my-2">Add Artis</Button>
            </>: <>
              <Button onClick = {()=> history.push('/payment')} variant="outline-light" className="me-2 px-4 my-2">Pay</Button>
            </>}
            <Button onClick={handleLogOut} variant="outline-light" className="me-2 px-4 my-2" style={{backgroundColor : "#EE4622"}}>Log Out</Button>
          </Nav>
            </> : <>    
          <Nav
            className="me-auro my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Button onClick={()=>setModaLogin(true)} variant="outline-light" className="me-2 px-4 my-2">Login</Button>
            <Button onClick={()=>setModalRegister(true)} variant="outline-light" className="me-2 px-4 my-2" style={{backgroundColor : "#EE4622"}}>Register</Button>
          </Nav>
            </>} 
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar;