import { useEffect, useState } from "react";
import Jumbotron from "../component/home/Jumbotron";
import MusicList from "../component/home/MusicList";
import ApiServices from "../Api/ApiServices";
import MusicPlayer from "../component/home/MusicPlayer";

const Home = ({isLogin, setShowModal}) => {
  const [musics, setMusics] = useState([]);
  const [musicPlayIndex, setmusicPlayIndex] = useState(null);

  useEffect(()=> {
    fetchMusics();
  }, []);

  const fetchMusics = async () => {
    const data = await ApiServices.getMusics();
    setMusics(data);
  };

  const handlePlayMusic = (index) => {
    if(!isLogin){
      return setShowModal(true);
    }
    setmusicPlayIndex(index);
  };

  return(
    <>
      <Jumbotron />
      <MusicList musics={musics} setPlayMusic={handlePlayMusic}/>
      {musicPlayIndex? 
        <MusicPlayer musics={musics} index={musicPlayIndex}/>:
        <></>
      }
    </>
  )
}
export default Home;