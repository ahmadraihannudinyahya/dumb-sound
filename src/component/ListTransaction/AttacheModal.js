import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const AttacheModal = ({src, setSrc}) => {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    if(src !== null){
      setShow(true);
    }
  }, [src]);
  const handleClose = () => {
    setSrc(null);
    setShow(false);
  };
  return(
    <Modal show = {show} onHide={handleClose}>
      <Modal.Body style={{backgroundColor: '#161616'}}>
        <img alt="proof attachment" src={src} className="img-fluid mx-auto d-block"/>
      </Modal.Body>
    </Modal>
  )
};
export default AttacheModal;