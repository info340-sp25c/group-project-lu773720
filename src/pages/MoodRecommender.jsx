import React from 'react';
import Card from '../components/Card';
import songs from '../song.json';
import { SearchBarModule } from '../components/SearchBar';
import '../../project-draft/css/style.css';

export default function MoodRecommender() {
  return (
    <>
    <SearchBarModule
        title="Mood Music Recommender"
        label="Enter your current mood"
        barText="Input Current Mood.."
        dividerText="Your mood recommendations.."
      />

      <main>
        <section>
          <div className="card-container">
            {songs.map((song, i) => (
              <Card
                key={i}
                img={song.img}
                title={song.title}
                artist={song.artist}
                description={song.description}
              />
            ))}
          </div>
        </section>
      </main>
      <footer> footer </footer>
    </>
  );
}
