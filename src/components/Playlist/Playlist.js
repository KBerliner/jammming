import React, { useState } from 'react';
import styles from './Playlist.module.css';
import Track from '../Track/Track';

export default function Playlist(props) {
    const tracks = props.tracklist.map(track => <Track handleRemoveFromPlaylist={props.handleRemoveFromPlaylist} id={track.id} key={track.id} name={track.name} artist={track.artist} album={track.album} saved={true} />);

    const [playlistTitle, setPlaylistTitle] = useState('Your Playlist');

    return (
        
        <div className={styles.playlistContainer}><div>
                <input onChange={({ target }) => setPlaylistTitle(target.value)} className={styles.playlistTitle} value={playlistTitle} />
                <ul className={styles.playlistTracksContainer}>
                    {tracks}
                </ul>
                {props.emptyPlaylist ? <h4>Start Adding Songs!</h4> : <div className={styles.submitToSpotifyBtn}>Submit To Spotify!</div>}
            </div>
        </div>
    )
}