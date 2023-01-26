// import jsonData from "./descriptions.json"

const Recommend = (props) => {
  const { tracks } = props;
  if (!tracks) {
    return <p id="loading">Loading...</p>;
  }

  console.log(tracks.data.tracks[0].id)

  return (
    <div>
      <section id="songList">
        <ul>
          <li><strong>id: </strong>{tracks.data.tracks[0].id}</li>
        </ul>
      </section>
    </div>
  );
};

export default Recommend;