import React from 'react';
import styles from './Tracklist.module.css';

import Track from '../Track/Track';



export default function Tracklist(props) {
    let tracks;
    let areThereTracks;

    if (props.tracklist && props.tracklist.length > 0) {
        areThereTracks = true;
        tracks = props.tracklist.map(track => <Track handleAddToPlaylist={song => props.handleAddToPlaylist(song)} uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={false} />);
    } else if (props.tracklist && props.tracklist.length == 0) {
        areThereTracks = false;
    }

    return (
        <div className={`${styles.tracklistContainer} ${styles.neumorphismShadow}`}>
            <h2>Search Results</h2>
            {!areThereTracks ? <h4 data-testid="emptyTracklistText">Search for Some Songs!</h4> : 
            <ul data-testid="tracksContainer">
                {tracks}
            </ul>} 

        </div>
    )
}