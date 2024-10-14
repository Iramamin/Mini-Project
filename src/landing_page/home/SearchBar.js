import React, { useState } from 'react';
import backgroundImage from './picture.jpg';


function SearchBar({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ from, to, date });
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          style={styles.input}
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          style={styles.input}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',   // Cover the entire screen
    backgroundPosition: 'center',  // Center the image
    backgroundRepeat: 'no-repeat',

  },
  form: {
    display: 'flex',
    gap: '8px',  // Adds space between the inputs
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    width:'8rem',
    padding: '10px ',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '4px',
    marginRight: '4px',
  },
};

export default SearchBar;
