import { Container } from "react-bootstrap";

const Jumbotron = () => {
  return(
    <Container fluid className="p-5" style = {{backgroundImage : `url(/jumbotron.png)`, height : '512px'}}>
      <h1 className="text-center" style={{color : '#fff', marginTop : '170px', textShadow : '2px 2px #1F1F1F'}}>Connect on DumbSound</h1>
      <p className="text-center text-break" style={{color : '#fff', textShadow : '1px 1px #1F1F1F'}}>Discovery, Stream, and share a constantly expanding mix of music from emerging and major artists around the world</p>
    </Container>
  )
}

export default Jumbotron;