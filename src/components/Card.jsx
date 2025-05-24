import React from 'react';

export default function Card({img, title, artist, description, favorites, addFavorite, removeFavorite}) {

  const isFav = favorites.some(s => s.title === title && s.artist === artist);
  const song = { img, title, artist, description };

  const toggleFav = () => {
    isFav ? removeFavorite(song) : addFavorite(song);
  };

  return (
    <div className="card">
      <img src={img} alt={`${title} album cover art`} />
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{description}</p>
      <div className="card-footer">
        <button
          type="button"
          onClick={toggleFav}
          aria-label={isFav ? 'Unlike' : 'Like'}
        >
          <i
            className="material-icons"
            style={{ fontSize: '1.5rem', color: isFav ? 'red' : 'black' }}
          >
            {isFav ? 'favorite' : 'favorite_border'}
          </i>
        </button>

        <a href="#" className="card-play" aria-label="Play">
          <i className="material-icons" style={{ fontSize: '1.5rem' }}>
            play_arrow
          </i>{' '}
          Play
        </a>
      </div>
    </div>
  );
}


