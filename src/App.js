import { useEffect, useState } from "react";
import ModalLogin from "./component/common/ModalLogin";
import ModalRegister from "./component/common/ModalRegister";
import NavBar from "./component/common/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddArtis from "./pages/AddArtis";
import AddMusic from "./pages/AddMusic";
import Payment from "./pages/Payment";
import ListTransactions from "./pages/ListTransactions";


function App() {
  const [isLogin , setIslogin] = useState(true);
  const [isAdmin , setIsAdmin] = useState(false);
  const [modalLoginStatus , setModalLogin] = useState(false);
  const [modalRegisterStatus , setModalRegister] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIslogin(true);
    }
  }, []);
  
  useEffect(()=>{
    if(isLogin){
      const token = localStorage.getItem('token');
      if(!token){
        setIslogin(false);
      }
      const accessAdmin = localStorage.getItem('isAdmin');
      if(accessAdmin){
        setIsAdmin(true);
      };
    }else{
      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <NavBar setModaLogin = {setModalLogin} isAdmin = {isAdmin} setModalRegister = {setModalRegister} isLogin ={isLogin} setIslogin = {setIslogin}/>
      <Switch>
        <Route path={'/payment'} component={Payment}/>
        <Route path={'/addartis'} component={AddArtis}/>
        <Route path={'/addmusic'} component={AddMusic}/>
        <Route path={'/'}>
          {isAdmin?
            <ListTransactions />:
            <Home isLogin={isLogin} setShowModal = {setModalLogin}/>
          }
        </Route>
      </Switch>
      <ModalLogin show = {modalLoginStatus} setShow = {setModalLogin} setShowRegister = {setModalRegister} setIslogin = {setIslogin}/>
      <ModalRegister show = {modalRegisterStatus} setShow = {setModalRegister} setShowLogin = {setModalLogin} setIslogin = {setIslogin}/>
    </BrowserRouter>
  );
}

export default App;
