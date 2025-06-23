import React from 'react';
import './Search.css';

export interface SearchProps {
  query: string;
  updateQuery: (query: string) => void;
}

const Search = ({ query, updateQuery }: SearchProps) => {
  return (
    <div className="search">
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