import React from 'react';
import styles from './Track.module.css';

export default function Track(props) {
    return (
        <div className={styles.trackContainer}>
            <h3>{props.name}</h3>
            <h4>{props.artist}</h4>
            <h4>{props.album}</h4>
        </div>
    )
}