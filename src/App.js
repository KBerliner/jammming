import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

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

  async function handleSubmitPlaylist({ name, tracks }) {
    console.log(name, tracks);
    setPlaylistTracklist([]);

    fetch(`https://api.spotify.com/v1/users/${localStorage.getItem('uid')}/playlists`, {
      method: 'POST',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('authKey')}`
      },
      body: JSON.stringify({
        "name": name
      })
    }).then(async response => {
      const parsedResponse = await response.json()
      fetch(`https://api.spotify.com/v1/playlists/${parsedResponse.id}/tracks`, {
        method: 'POST',
        headers: {
          "authorization": `Bearer ${localStorage.getItem('authKey')}`,
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          "uris": tracks
        })
      })
    })
  }

  async function handleUserLogin() {
    const client_id = '055d88f1c2234b3ebc20e65c8cbecf5e';
    const redirect_uri= 'http://localhost:3000'

    const state = '1234123412341234';

    const scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;

    window.location = url;
  }

  async function handleSearch(string) {
    if (string === '') {
      return alert('You must enter text to search.');
    }

    const token = localStorage.getItem('authKey');

    await fetch(`https://api.spotify.com/v1/search?q=${string}&type=track`, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then(async (responseObj) => {
      let parsedResponse = await responseObj.json();
      const tracks = parsedResponse.tracks.items.map(
        (track) => {
          return {
            uri: track.uri,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name
          }
        }
      )
      setTracklist(tracks);
    })
  }

  useEffect(() => {
    if (localStorage) {
      if (!localStorage.getItem('authKey') && !localStorage.getItem('uid') && window.location.hash) {
        localStorage.setItem('authKey', window.location.hash.substring(1).split('=')[1]);
        fetch(`https://api.spotify.com/v1/me`, {
          headers: {
            "authorization": `Bearer ${localStorage.getItem('authKey')}`
          }
        }).then( async uid => {
          const parsedUid = await uid.json();
          localStorage.setItem('uid', parsedUid.id);
          window.location = 'http://localhost:3000';
        }).catch(error => {
          console.log('There was an Error retrieving your user ID: ' + error);
        });
      }
    }
  }, []) 

  return (
    <div className="App">
      {window.location.hash || localStorage.getItem('authKey') ? 
        <div>
        <SearchBar onSearch={handleSearch} />
        <div className="tracksAndPlaylistContainer">
          <Tracklist handleAddToPlaylist={handleAddToPlaylist} tracklist={searchResultsTracklist} />
          <Playlist onSubmitPlaylist={handleSubmitPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} emptyPlaylist={playlistTracklist.length === 0} tracklist={playlistTracklist} />
        </div>
        </div>
      :
        <div className="loginContainer"><button onClick={handleUserLogin} className="loginBtn">Login Here!</button></div>
      }

    </div>
  );
}

export default App;
