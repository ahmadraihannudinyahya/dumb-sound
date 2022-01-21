const { Card, Row, Col } = require("react-bootstrap");

const MusicCard = ({id, title, year, thumbnail, artis, setPlayMusic, index}) => {
  return(
    <Col xs={6} sm={6} md={4} lg={3} xl={2} className = "mt-2">
      <Card onClick={()=>setPlayMusic(index)} style={{ width: '185px' , height : '240px', backgroundColor : '#3A3A3A'}} className="mx-auto p-0">
        <Card.Img variant="top" src={thumbnail} style={{ width: '165px' , height : '152px', objectFit : 'cover'}} className = "mx-auto mt-2"/>
          <Card.Text className = "px-2">
            <Row style = {{height : '22px'}} className = "mt-3">
              <Col xs = {8}>
                <p style = {{height : '22px', overflow : 'hidden', fontWeight : 'bold', color : '#fff'}}>
                  {title}
                </p>
              </Col>
              <Col xs = {4}>
                <p style = {{height : '22px', overflow : 'hidden', fontWeight : 'bold', color : '#fff'}}>
                  {year}
                </p>
              </Col>
            </Row>
            <p className = "mt-1" style={{color : '#fff'}}>{artis.name}</p>
          </Card.Text>
      </Card>
    </Col>
  )
}
export default MusicCard;