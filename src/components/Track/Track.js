import React from 'react';
import styles from './Track.module.css';
import addBtn from '../../visual/add_FILL0_wght400_GRAD0_opsz24.svg';
import removeBtn from '../../visual/close_FILL0_wght400_GRAD0_opsz24.svg';

export default function Track(props) {
    function handleClick() {
        const song = {
            uri: props.uri,
            name: props.name,
            artist: props.artist,
            album: props.album
        }
        if (props.handleAddToPlaylist) {
            props.handleAddToPlaylist(song)
        } else if (props.handleRemoveFromPlaylist) {
            props.handleRemoveFromPlaylist(song);
        }
    }

    return (
        <div data-testid={props.saved ? 'playlistTrack' : 'searchResultsTrack'} className={styles.trackContainer}>
            <h3 data-testid="trackName">{props.name}</h3>
            <h4 data-testid="trackArtist">{props.artist}</h4>
            <h4 data-testid="trackAlbum">{props.album}</h4>
            <img data-testid="trackButton" onClick={handleClick} className={styles.addToPlaylistButton} src={props.saved ? removeBtn : addBtn} />
        </div>
    )
}