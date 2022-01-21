import React from 'react';
import { Row, Container } from 'react-bootstrap';
import MusicCard from './MusicCard';

const MusicList = ({musics, setPlayMusic}) => {
  return(
    <Container fluid className='pt-5' style = {{paddingBottom : '100px',backgroundColor : "#161616"}}>
      <h3 style={{color : '#EE4622'}} className = 'text-center mb-5'>Dengarkan Dan Rasakan</h3>
      <Row className='mx-xs-0 mx-sm-1 mx-md-3 mx-lg-5'>
        {musics.map((music, index) => <MusicCard key = {music.id} {...music} index={index} setPlayMusic={setPlayMusic}/>)}
      </Row>
    </Container>
  )
}
export default MusicList;