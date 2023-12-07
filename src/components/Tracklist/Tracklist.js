import React from 'react';
import styles from './Tracklist.module.css';

import Track from '../Track/Track';

const falsifiedTracklist = [
    {
        id: 1234,
        name: 'track1',
        artist: 'kberliner',
        album: 'mockAlbum'
    },
    {
        id: 4123,
        name: 'track3',
        artist: 'kberlinco',
        album: 'mockAlbum2'
    }
]

export default function Tracklist() {
    const tracks = falsifiedTracklist.map(track => <Track key={track.id} name={track.name} artist={track.artist} album={track.album} saved={false} />)

    return (
        <div className={`${styles.tracklistContainer} ${styles.neumorphismShadow}`}>
            <h2>Search Results</h2>
            <ul>
                {tracks}
            </ul>
        </div>
    )
}