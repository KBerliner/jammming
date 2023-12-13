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

    return (
        <div>
            <form onSubmit={search}>
                <input data-testid="searchInput" className={styles.neumorphismShadowInset} onChange={handleInput} value={searchQuery} type="text" />
                <img data-testid="searchBtn" onClick={search} src={NewSearchIcon} className={`${styles.searchIcon} ${styles.neumorphismShadowPortruding}`} />
            </form>
        </div>
    )
}