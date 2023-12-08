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

    useEffect(() => {
        if (localStorage) {
            if (!localStorage.getItem('authKey')) {
                console.log(window.location);
                localStorage.setItem('authKey', window.location.hash.substring(1).split('=')[1]);
                window.location = 'http://localhost:3000';
            }
        }
    }, [])

    return (
        <div>
            <form onSubmit={search}>
                <input className={styles.neumorphismShadowInset} onChange={handleInput} value={searchQuery} type="text" />
                <img onClick={search} src={NewSearchIcon} className={`${styles.searchIcon} ${styles.neumorphismShadowPortruding}`} />
            </form>
        </div>
    )
}