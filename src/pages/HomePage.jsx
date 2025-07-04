import React, { useState, useEffect } from "react";
// import { HomeLayout } from "../components/HomeLayout";
//import { Header } from "../components/Header";
import { searchArtist, getTracksFromArtist, getThumbnailUrlFromTrackUrl } from '../api.js';
import Card from '../components/Card';
import { SearchBar } from "../components/SearchBar";
import { ProfileWindow } from "../components/ProfileWindow"
import { Link } from "react-router-dom";

export function HomePage({ user, profileImage = "img/profile.png", favorites, addFavorite, removeFavorite, thumbnails, setThumbnails }) {
    const [query, setQuery] = useState('');
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [songs, setSongs] = useState([]);

    const handleSearch = async () => {
        const result = await searchArtist(query);
        console.log(result);
        setArtists(result);
        setSelectedArtist(null);
        setSongs([]);
    };

    const handleSelectArtist = async (artist) => {
        setSelectedArtist(artist);
        const result = await getTracksFromArtist(artist.id);
        console.log(result);
        setSongs(result);
    };

    useEffect(() => {
        const loadThumbnails = async () => {
        const newThumbs = {};
        for (const song of songs) {
            if (song.href && !thumbnails[song.id]) {
            const thumbUrl = await getThumbnailUrlFromTrackUrl(song.href);
            newThumbs[song.id] = thumbUrl;
            }
        }
        setThumbnails(prev => ({ ...prev, ...newThumbs }));
        };

        if (songs.length > 0) {
        loadThumbnails();
        }
    }, [songs]);


    return (
    <>
        <header>
        <ProfileWindow user={user} profileImage={profileImage}/>
        <SearchBar
            title="Search Artists"
            label="Search for artist"
            barText="Enter artist name"
            dividerText=""
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
            />
        </header>
        {!selectedArtist && artists.length > 0 && (
          <ul>
            {artists.map((artist, i) => (
              <li key={i}>
                <button onClick={() => handleSelectArtist(artist)}>
                  {artist.name || artist}
                </button>
              </li>
            ))}
          </ul>
        )}
        {selectedArtist && (
          <div>
            <h2>Songs by {selectedArtist.name || selectedArtist}</h2>
            <div className="card-container">
              {songs.map((song, i) => (
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
          </div>
        )}
    </>
    );

  

}