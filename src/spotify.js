import SpotifyPlayer from "react-spotify-player";


const Recommend = (props) => {
  const { tracks } = props;
  if (!tracks) {
    return <p id="loading">Loading...</p>;
  }


  const size = {
    width: '20%',
    height: 300,
  };
  const view = 'coverart';
  const theme = 'black';
  const uri = `spotify:track:${tracks.data.tracks[0].id}`

  console.log(tracks.data.tracks[0].id)

  return (
    <div id="player">
      <SpotifyPlayer
        uri={uri}
        size={size}
        view={view}
        theme={theme}
      />
      {/* <section id="songList">
      </section> */}
    </div>
  );
};

export default Recommend;