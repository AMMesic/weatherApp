import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('stockholm');

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/weather/${query}`);
    // const res = await fetch(`http://localhost:5000/weather/london`);
    const data = await res.json();
    console.log(data)
    setWeather(data)
  };
  fetchData()

  const updateSearch = e => {
    console.log(e.target.value)
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <form onClick={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
