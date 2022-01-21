import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


const MusicPlayer = ({musics, index}) => {
  const audioLists = musics.map(music => ({
    name : music.title, 
    singer:music.artis.name, 
    cover:music.thumbnail, 
    musicSrc:music.attache
  }));
  const options = {
    mode : 'full',
    audioLists,
    defaultPosition : {bottom : 0, left : 0},
    toggleMode : false, 
    showDownload : false, 
    showPlayMode : false, 
    showThemeSwitch : false, 
    showLyric : false,
    showDestroy : false,
    showReload : false,
    responsive : false, 
    playIndex : index
  };
  return(
    <>
      <ReactJkMusicPlayer {...options}/>
    </>
  )
};
export default MusicPlayer;