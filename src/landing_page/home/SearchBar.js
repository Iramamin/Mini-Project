import React, { useState } from 'react';
import axios from 'axios';

const backgroundImage = '/media/picture.jpg'; // Ensure this path is correct

function SearchBar({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSearch) {
      try {
        const response = await axios.get('http://localhost:3000/api/search', {
          params: { from, to, date },
        });
        onSearch(response.data); // Pass search results to the parent component
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '450vh',
      paddingTop: '500px', // Adjust based on the navbar height if needed
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1, 
    },
    form: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'nowrap', // Ensure inputs and button stay on one line
      flexDirection: 'row',  // Make sure elements are in a row
      maxWidth: '600px', // Limits form width for better control
      width: '100%',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      outline: 'none',
      flexGrow: 1,
      minWidth: '120px',
    },
    button: {
      width: '8rem',
      padding: '10px',
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
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
