
import React from 'react';
import Card from './Card';
import songs from './song.json';
import '../project-draft/css/style.css';

function App() {
  return (
    <div className="card-container">
      {songs.map((song, idx) => (
        <Card
          key={idx}
          img={song.img}
          title={song.title}
          artist={song.artist}
          description={song.description}
        />
      ))}
    </div>
  );
}

export default App;
