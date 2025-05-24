import React from 'react';
import Card from '../components/Card';
import songs from '../song';
import { SearchBar } from '../components/SearchBar';
import '../../project-draft/css/style.css';

export default function MoodRecommender({ favorites, addFavorite, removeFavorite }) {
  return (
    <>
    <SearchBar
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
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            ))}
          </div>
        </section>
      </main>
     
    </>
  );
}
