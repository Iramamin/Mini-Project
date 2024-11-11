import React, { useState } from 'react';
import About from './About';
import SearchBar from './SearchBar';
import axios from 'axios';

function Homepage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (searchParams) => {
    try {
      const response = await axios.get('http://localhost:3000/api/search', {
        params: searchParams
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div>
        {results.map((result) => (
          <div key={result._id}>
            <h2>{result.Name}</h2>
            <p>{result.description}</p>
            <img src={result.image.url} alt={result.Name} width="200" />
            <p>{result.location}, {result.country}</p>
          </div>
        ))}
      </div>
      <About />
    </>
  );
}

export default Homepage;
