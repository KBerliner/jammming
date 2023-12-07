import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="tracksAndPlaylistContainer">
        <Tracklist />
        <Playlist />
      </div>
      
    </div>
  );
}

export default App;
