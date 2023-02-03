import SpotifyPlayer from "react-spotify-player";

const Recommend = (props) => {
  const { tracks } = props;


  const size = {
    width: "100%",
    height: 200,
  };
  const view = "coverart";
  const theme = "black";


  return (
    <div>
      {tracks ? 
      <div>
        <section id="suggest">
          <h3>
            Song Recommendation for Weather: </h3>
          <div id="player">
            <SpotifyPlayer uri={`spotify:track:${tracks.data.tracks[0].id}`} size={size} view={view} theme={theme} />
          </div>
        </section>
      </div> : <p id="loading">Loading Song Recommendation System...</p>}
    </div>
  );
};

export default Recommend;
