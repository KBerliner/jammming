import React from 'react';
import styles from './Tracklist.module.css';

import Track from '../Track/Track';



export default function Tracklist(props) {

    const tracks = props.tracklist.map(track => <Track handleAddToPlaylist={song => props.handleAddToPlaylist(song)} id={track.id} key={track.id} name={track.name} artist={track.artist} album={track.album} saved={false} />)

    return (
        <div className={`${styles.tracklistContainer} ${styles.neumorphismShadow}`}>
            <h2>Search Results</h2>
            <ul>
                {tracks}
            </ul>
        </div>
    )
}