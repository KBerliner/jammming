import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Tracklist />
    </div>
  );
}

export default App;
