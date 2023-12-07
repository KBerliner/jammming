import React from 'react';
import styles from './Playlist.module.css';
import Track from '../Track/Track';

const falsifiedTracklist = [
    {
        id: 1234,
        name: 'track1',
        artist: 'kberliner',
        album: 'mockAlbum'
    }
]

export default function Playlist() {
    const tracks = falsifiedTracklist.map(track => <Track key={track.id} name={track.name} artist={track.artist} album={track.album} saved={true} />);

    return (
        <div className={styles.playlistContainer}>
            <h2>Your Playlist</h2>
            <ul className={styles.playlistTracksContainer}>
                {tracks}
            </ul>
            <div className={styles.submitToSpotifyBtn}>Submit To Spotify!</div>
        </div>
    )
}