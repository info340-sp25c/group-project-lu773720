import React, { useState, useEffect } from 'react';
import { getRecommendation, getThumbnailUrlFromTrackUrl } from '../api.js';
import Card from '../components/Card';
//import songs from '../song';
import moodList from '../moods.js';
import '../../project-draft/css/style.css';

export default function MoodRecommender({ favorites, addFavorite, removeFavorite, thumbnails, setThumbnails }) {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [moodRecs, setMoodRecs] = useState([]);

  const moodToggled = (name) => {
    setSelectedMoods((prev) =>
      prev.includes(name)
        ? prev.filter((mood) => mood !== name)
        : [...prev, name]
    );
  };

  const doMoodRec = async () => {
    let moodValues = [];
    let favoritedSongIds = [];
    for (const mood of selectedMoods) {
      moodValues.push(moodList[mood]);
    };
    for (const favorite of favorites) {
      favoritedSongIds.push(favorite.id);
    }
    setMoodRecs(await getRecommendation(favoritedSongIds, moodValues));
    console.log(moodRecs);
  };

  useEffect(() => {
    const loadThumbnails = async () => {
      const newThumbs = {};
      for (const song of moodRecs) {
        if (song.href && !thumbnails[song.id]) {
          const thumbUrl = await getThumbnailUrlFromTrackUrl(song.href);
          newThumbs[song.id] = thumbUrl;
        }
      }
      setThumbnails(prev => ({ ...prev, ...newThumbs }));
    };

    if (moodRecs.length > 0) {
      loadThumbnails();
    }
  }, [moodRecs]);

  return (
    <>
      <header className="search" style={{paddingBottom: 30, textAlign: 'center'}}> 
        <h1 style={{marginBottom:35}}>Mood Recommender</h1>
        <h2>Select one or more moods:</h2>
        <div class="mood-container">
          {moodList && Object.entries(moodList).map(([name, props]) => (
            <label key={name} className="mood-checkbox-label">
              <input
                type="checkbox"
                checked={selectedMoods.includes(name)}
                onChange={() => moodToggled(name)}
              />
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
          ))}
        </div>
        <button type="button" onClick={() => doMoodRec()}>Go</button>
      </header>
      <main>
        <section>
          <div className="card-container">
            {moodRecs && moodRecs.map((song, i) => (
              <Card
                key={song.id}
                id={song.id}
                img={thumbnails[song.id] || 'img/profile.png'}
                title={song.trackTitle}
                artist={song.artists.map(a => a.name).join(', ')}
                description={`Duration: ${Math.round(song.durationMs / 1000)}s`}
                url={song.href}
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
