import React from 'react';
import './Search.css';

export interface SearchProps {
  query: string;
  updateQuery: (query: string) => void;
  position?: 'top' | 'bottom';
}

const Search = ({ query, updateQuery, position = 'bottom' }: SearchProps) => {
  const positionClass = position === 'top' ? 'search-top' : 'search-bottom';
  
  return (
    <div className={`search ${positionClass}`}>
      <div className="container">
        <span className="icon">🔍</span>
        <input
          value={query}
          onChange={e => updateQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;