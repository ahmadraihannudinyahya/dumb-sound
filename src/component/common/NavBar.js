import { Container, Navbar, Nav, Button, Dropdown, DropdownButton} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = ({isLogin, isAdmin ,setModaLogin, setModalRegister, setIslogin}) => {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIslogin(false);
    history.push('/')
  };
  return(
    <Navbar variant="dark" bg = {isAdmin? 'dark' : 'transparant'} fixed= {isAdmin? 'fixed-top' : 'top'} expand="md" style = {{height : '10vh', backgroundColor : 'transparant'}}>
      <Container fluid className="p-3">
        <Navbar.Brand onClick = {()=>history.push('/')} style={{cursor: 'pointer', marginLeft : '20px'}}>
          <img
            src="/Logo.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-md-end">
          <Nav
            className="me-auro my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {isLogin ? <>
              <DropdownButton
                variant="link"
                title={<img src="profile.png" style={{width : '50px' , height : '50px'}} alt='profile' className="rounded-circle"/>}
                id="input-group-dropdown-1"
                drop= "start"
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
            </> : <>
              <Button onClick={()=>setModaLogin(true)} variant="outline-light" className="me-2 px-4">Login</Button>
              <Button onClick={()=>setModalRegister(true)} variant="outline-light" className="me-2 px-4" style={{backgroundColor : "#EE4622"}}>Register</Button>
            </>} 
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar;