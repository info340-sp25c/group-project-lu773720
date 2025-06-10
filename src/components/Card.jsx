import React from 'react';
import Lottie from 'lottie-react';
import heartAnimation from './heart-burst.json';

export default function Card({id, img, title, artist, description, url, favorites, addFavorite, removeFavorite}) {

  const [showAnimation, setShowAnimation] = useState(false);
  
  const isFav = favorites.some(s => s.title === title && s.artist === artist);
  const song = { id, img, title, artist, description };

  const toggleFav = () => {
    if (isFav) { 
      removeFavorite(song)
    } else { 
      addFavorite(song);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
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

        <a href={url} className="card-play" aria-label="Play" target="_blank">
          <i className="material-icons" style={{ fontSize: '1.5rem' }}>
            play_arrow
          </i>{' '}
          Play
        </a>
      </div>

      {showAnimation && (
        <Lottie
          animationData={heartAnimation}
          loop={false}
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            width: 150,
            height: 150,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
}
}