import React, { useState } from 'react';
import styles from './Playlist.module.css';
import Track from '../Track/Track';

export default function Playlist(props) {
    let tracks;

    if (!props.emptyPlaylist && props.tracklist && props.tracklist.length > 1) {
        tracks = props.tracklist.map(track => <Track handleRemoveFromPlaylist={props.handleRemoveFromPlaylist} uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={true} />);
    } else if (!props.emptyPlaylist && props.tracklist && props.tracklist.length === 1) {
        let track = props.tracklist[0];
        tracks = <Track handleRemoveFromPlaylist={props.handleRemoveFromPlaylist} uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={true} />;
    }

    const [playlistTitle, setPlaylistTitle] = useState('Your Playlist');

    function handleSubmit() {
        const playlist = {
            name: playlistTitle,
            tracks: props.tracklist.map(track => track.uri)
        };
        props.onSubmitPlaylist(playlist);
        setPlaylistTitle('Your Playlist');
    }

    return (
        
        <div className={styles.playlistContainer}>
            <input data-testid="playlistTitle" onChange={({ target }) => setPlaylistTitle(target.value)} className={styles.playlistTitle} value={playlistTitle} />
            <ul data-testid="playlistTracksContainer" className={styles.playlistTracksContainer}>
                {tracks}
            </ul>
            {props.emptyPlaylist ? <h4 data-testid="emptyPlaylistText">Start Adding Songs!</h4> : <div data-testid="submitToSpotifyBtn" onClick={handleSubmit} className={styles.submitToSpotifyBtn}>Submit To Spotify!</div>}
        </div>
    )
}