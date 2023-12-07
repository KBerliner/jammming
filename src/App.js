import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';



function App() {
  const [searchResultsTracklist, setTracklist] = useState([
    {
        id: 1234,
        name: 'track1',
        artist: 'kberliner',
        album: 'mockAlbum'
    },
    {
      id: 1334,
      name: 'track2',
      artist: 'kberlinco',
      album: 'mockAlbum'
  }
  ])

  const [playlistTracklist, setPlaylistTracklist] = useState([]);

  function handleAddToPlaylist(song) {
    if (playlistTracklist.filter(track => track.id === song.id).length !== 0) {
      alert('That song is already in your playlist!');
    } else {
      setPlaylistTracklist((prev) => [...prev, song]);
    }
  }

  function handleRemoveFromPlaylist(song) {
    setPlaylistTracklist(playlistTracklist.filter(track => track.id !== song.id));
  }

  return (
    <div className="App">
      <SearchBar />
      <div className="tracksAndPlaylistContainer">
        <Tracklist handleAddToPlaylist={handleAddToPlaylist} tracklist={searchResultsTracklist} />
        <Playlist handleRemoveFromPlaylist={handleRemoveFromPlaylist} emptyPlaylist={playlistTracklist.length === 0} tracklist={playlistTracklist} />
      </div>
      
    </div>
  );
}

export default App;
