import { useEffect, useState } from "react";
import Jumbotron from "../component/home/Jumbotron";
import MusicList from "../component/home/MusicList";
import ApiServices from "../Api/ApiServices";
import MusicPlayer from "../component/home/MusicPlayer";
import { useHistory } from "react-router-dom";

const Home = ({isLogin, setShowModal}) => {
  const [musics, setMusics] = useState([]);
  const [musicPlayIndex, setmusicPlayIndex] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    fetchMusics();
  }, [isLogin]);

  useEffect(()=>{
    if(!isLogin){
      setmusicPlayIndex(null);
    };
  }, [isLogin])

  const fetchMusics = async () => {
    const data = await ApiServices.getMusics();
    setMusics(data);
  };

  const handlePlayMusic = (index) => {
    if(!isLogin){
      return setShowModal(true);
    }
    if(!musics[0].attache){
      return history.push('/payment')
    }
    setmusicPlayIndex(index);
  };

  return(
    <>
      <Jumbotron />
      <MusicList musics={musics} setPlayMusic={handlePlayMusic}/>
      {musicPlayIndex !== null? 
        <MusicPlayer musics={musics} index={musicPlayIndex}/>:
        <></>
      }
    </>
  )
}
export default Home;