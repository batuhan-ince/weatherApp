// import jsonData from "./descriptions.json"

const Recommend = (props) => {
  const { tracks } = props;
  if (!tracks) {
    return <p id="loading">Loading...</p>;
  }



  const trackInfos = (track) => {
    const trackList = [];
    track[0].forEach(item => {
      trackList.push({id: item.artists[0].id, song_name: item.name, artist_name: item.artists[0].name})
    })
    return trackList
  }

  const songs = trackInfos(tracks)
  return (
    <div>
      <section id="songList">
        <ul>
          <li><strong>id: </strong>{tracks[0][0].id}  <strong>artist: </strong> {tracks[0][0].artists[0].name} <strong>song_name: </strong> {tracks[0][0].name}</li>
          <li><strong>id: </strong>{tracks[0][1].id}  <strong>artist: </strong> {tracks[0][1].artists[0].name} <strong>song_name: </strong> {tracks[0][1].name}</li>
          <li><strong>id: </strong>{tracks[0][2].id}  <strong>artist: </strong> {tracks[0][2].artists[0].name} <strong>song_name: </strong> {tracks[0][2].name}</li>
          <li><strong>id: </strong>{tracks[0][3].id}  <strong>artist: </strong> {tracks[0][3].artists[0].name} <strong>song_name: </strong> {tracks[0][3].name}</li>
          <li><strong>id: </strong>{tracks[0][4].id}  <strong>artist: </strong> {tracks[0][4].artists[0].name} <strong>song_name: </strong> {tracks[0][4].name}</li>
          <li><strong>id: </strong>{tracks[0][5].id}  <strong>artist: </strong> {tracks[0][5].artists[0].name} <strong>song_name: </strong> {tracks[0][5].name}</li>
          <li><strong>id: </strong>{tracks[0][6].id}  <strong>artist: </strong> {tracks[0][6].artists[0].name} <strong>song_name: </strong> {tracks[0][6].name}</li>
          <li><strong>id: </strong>{tracks[0][7].id}  <strong>artist: </strong> {tracks[0][7].artists[0].name} <strong>song_name: </strong> {tracks[0][7].name}</li>
          <li><strong>id: </strong>{tracks[0][8].id}  <strong>artist: </strong> {tracks[0][8].artists[0].name} <strong>song_name: </strong> {tracks[0][8].name}</li>
          <li><strong>id: </strong>{tracks[0][9].id}  <strong>artist: </strong> {tracks[0][9].artists[0].name} <strong>song_name: </strong> {tracks[0][9].name}</li>
          <li><strong>id: </strong>{tracks[0][10].id}  <strong>artist: </strong> {tracks[0][10].artists[0].name} <strong>song_name: </strong> {tracks[0][10].name}</li>
          <li><strong>id: </strong>{tracks[0][11].id}  <strong>artist: </strong> {tracks[0][11].artists[0].name} <strong>song_name: </strong> {tracks[0][11].name}</li>
          <li><strong>id: </strong>{tracks[0][12].id}  <strong>artist: </strong> {tracks[0][12].artists[0].name} <strong>song_name: </strong> {tracks[0][12].name}</li>
          <li><strong>id: </strong>{tracks[0][13].id}  <strong>artist: </strong> {tracks[0][13].artists[0].name} <strong>song_name: </strong> {tracks[0][13].name}</li>
          <li><strong>id: </strong>{tracks[0][14].id}  <strong>artist: </strong> {tracks[0][14].artists[0].name} <strong>song_name: </strong> {tracks[0][14].name}</li>
          <li><strong>id: </strong>{tracks[0][15].id}  <strong>artist: </strong> {tracks[0][15].artists[0].name} <strong>song_name: </strong> {tracks[0][15].name}</li>
          <li><strong>id: </strong>{tracks[0][16].id}  <strong>artist: </strong> {tracks[0][16].artists[0].name} <strong>song_name: </strong> {tracks[0][16].name}</li>
          <li><strong>id: </strong>{tracks[0][17].id}  <strong>artist: </strong> {tracks[0][17].artists[0].name} <strong>song_name: </strong> {tracks[0][17].name}</li>
          <li><strong>id: </strong>{tracks[0][18].id}  <strong>artist: </strong> {tracks[0][18].artists[0].name} <strong>song_name: </strong> {tracks[0][18].name}</li>
          <li><strong>id: </strong>{tracks[0][19].id}  <strong>artist: </strong> {tracks[0][19].artists[0].name} <strong>song_name: </strong> {tracks[0][19].name}</li>
        </ul>
      </section>
    </div>
  );
};

export default Recommend;