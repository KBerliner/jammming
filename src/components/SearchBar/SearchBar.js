import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import NewSearchIcon from '../../visual/search_FILL0_wght400_GRAD0_opsz24.svg';

export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');

    function handleInput({ target }) {
        setSearchQuery(target.value);
    }

    function search(e) {
        e.preventDefault();
        props.onSearch(searchQuery);
    }

    // useEffect(() => {
    //     if (localStorage) {
    //         if (!localStorage.getItem('authKey') && !localStorage.getItem('uid')) {
    //             localStorage.setItem('authKey', window.location.hash.substring(1).split('=')[1]);
    //             fetch(`https://api.spotify.com/v1/me`, {
    //                 headers: {
    //                     "authorization": `Bearer ${localStorage.getItem('authKey')}`
    //                 }
    //             }).then( async uid => {
    //                 const parsedUid = await uid.json();
    //                 localStorage.setItem('uid', parsedUid.id);
    //             }).catch(error => {
    //                 console.log('There was an Error retrieving your user ID: ' + error);
    //             });
    //             window.location = 'http://localhost:3000';
    //         }
    //     }
    // }, [])

    return (
        <div>
            <form onSubmit={search}>
                <input className={styles.neumorphismShadowInset} onChange={handleInput} value={searchQuery} type="text" />
                <img onClick={search} src={NewSearchIcon} className={`${styles.searchIcon} ${styles.neumorphismShadowPortruding}`} />
            </form>
        </div>
    )
}