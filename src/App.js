import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';



function App() {
  

  const [searchResultsTracklist, setTracklist] = useState([])

  const [playlistTracklist, setPlaylistTracklist] = useState([]);

  function handleAddToPlaylist(song) {
    if (playlistTracklist.filter(track => track.uri === song.uri).length !== 0) {
      alert('That song is already in your playlist!');
    } else {
      setPlaylistTracklist((prev) => [...prev, song]);
    }
  }

  function handleRemoveFromPlaylist(song) {
    setPlaylistTracklist(playlistTracklist.filter(track => track.uri !== song.uri));
  }

  function handleSubmitPlaylist(tracks) {
    console.log(tracks);
    setPlaylistTracklist([]);
  }

  async function handleUserLogin(e) {
    e.preventDefault();
    console.log(document.getElementById('testinput').value);

    const client_id = '055d88f1c2234b3ebc20e65c8cbecf5e';
    const redirect_uri= 'http://localhost:3000'

    const state = '1234123412341234';

    const scope = 'user-read-private user-read-email';

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;

    window.location = url;
  }

  async function handleSearch(string) {
    if (string === '') {
      return alert('You must enter text to search.');
    }

    const token = window.location.hash.substring(1).split('=')[1];

    await fetch(`https://api.spotify.com/v1/search?q=${string}&type=track`, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then(async (responseObj) => {
      let parsedResponse = await responseObj.json();
      const tracks = parsedResponse.tracks.items.map(
        (track) => {
          return {
            uri: track.uri.split(':')[2],
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name
          }
        }
      )
      console.log(tracks);
      setTracklist(tracks);
    })
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="tracksAndPlaylistContainer">
        <Tracklist handleAddToPlaylist={handleAddToPlaylist} tracklist={searchResultsTracklist} />
        <Playlist onSubmitPlaylist={handleSubmitPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} emptyPlaylist={playlistTracklist.length === 0} tracklist={playlistTracklist} />
      </div>
    </div>
  );
}

export default App;
