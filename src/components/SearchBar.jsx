import React from "react";

export function SearchBar({ title, label, barText, dividerText, query,setQuery,onSearch,}) {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="search">
      <h1>{title}</h1>
      <form className="search-field" onSubmit={handleSubmit}>
        <label htmlFor="search-field" className="sr-only">
          {label}
        </label>
        <input
          id="search-field"
          className="masthead-search-field"
          type="text"
          name="q"
          placeholder={barText}
          aria-label={barText}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <i className="material-icons">search</i>
        </button>
      </form>
      {dividerText && (
        <div className="divider">
          <p>{dividerText}</p>
        </div>
      )}
    </div>
  );
}
