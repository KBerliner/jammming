import React from 'react';
import styles from './Track.module.css';
import addBtn from '../../visual/add_FILL0_wght400_GRAD0_opsz24.svg';
import removeBtn from '../../visual/close_FILL0_wght400_GRAD0_opsz24.svg';

export default function Track(props) {
    function handleClick() {
        const song = {
            id: props.id,
            name: props.name,
            artist: props.artist,
            album: props.album
        }
        if (props.handleAddToPlaylist) {
            props.handleAddToPlaylist(song)
        } else if (props.handleRemoveFromPlaylist) {
            // console.log(song)
            props.handleRemoveFromPlaylist(song);
        }
    }

    return (
        <div className={styles.trackContainer}>
            <h3>{props.name}</h3>
            <h4>{props.artist}</h4>
            <h4>{props.album}</h4>
            <img onClick={handleClick} className={styles.addToPlaylistButton} src={props.saved ? removeBtn : addBtn} />
        </div>
    )
}