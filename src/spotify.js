import SpotifyPlayer from "react-spotify-player";


const Recommend = (props) => {
  const { tracks } = props;

  if (!tracks) {
    return <p id="loading">Loading...</p>;
  }


  const size = {
    width: '100%',
    height: 200,
  };
  const view = 'coverart';
  const theme = 'black';
  const uri = `spotify:track:${tracks.data.tracks[0].id}`

  console.log(tracks.data.tracks[0].id)

  return (
    <div>
      <section id="suggest">
        <h3>Your song recommendation Based on Weather: </h3>
        <div id="player">
          <SpotifyPlayer
            uri={uri}
            size={size}
            view={view}
            theme={theme}
            />
        </div>
      </section>
    </div>
  );
};

export default Recommend;