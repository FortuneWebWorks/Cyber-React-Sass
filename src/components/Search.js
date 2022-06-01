import React from 'react';
import '../styles/search.scss';

const Search = ({ className, styles }) => {
  return (
    <input
      className={`search ${className || ''}`}
      placeholder="Search"
      style={styles}
    />
  );
};

export default Search;
