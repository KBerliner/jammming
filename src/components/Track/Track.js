import React from 'react';
import styles from './Track.module.css';
import addBtn from '../../visual/add_FILL0_wght400_GRAD0_opsz24.svg';

export default function Track(props) {
    return (
        <div className={styles.trackContainer}>
            <h3>{props.name}</h3>
            <h4>{props.artist}</h4>
            <h4>{props.album}</h4>
            <img className={styles.addToPlaylistButton} src={addBtn} />
        </div>
    )
}