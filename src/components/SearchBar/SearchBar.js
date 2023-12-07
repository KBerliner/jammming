import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import NewSearchIcon from '../../visual/search_FILL0_wght400_GRAD0_opsz24.svg';

export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');

    function handleInput({ target }) {
        setSearchQuery(target.value);
    }

    function search() {
        props.onSearch(searchQuery);
    }

    return (
        <div>
            <form>
                <input className={styles.neumorphismShadowInset} onChange={handleInput} value={searchQuery} type="text" />
                <img onClick={search} src={NewSearchIcon} className={`${styles.searchIcon} ${styles.neumorphismShadowPortruding}`} />
            </form>
        </div>
    )
}