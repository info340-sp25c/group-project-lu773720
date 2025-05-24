import React from 'react';

export function SongCard({img, title, artist, description}) {
  return (
    <div className="card">
      <img src={img} alt={`${title} album cover art`} />
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{description}</p>
      <div style={{ flexGrow: 1 }} />
      <a href="#">
        <i
          className="material-icons"
          style={{ fontSize: '1.5rem', marginRight: '0.5rem', float: 'left' }}
        >
          favorite_border
        </i>
        <i className="material-icons" style={{ fontSize: '1.5rem' }}>
          play_arrow
        </i>{' '}
        Play
      </a>
    </div>
  );
}


