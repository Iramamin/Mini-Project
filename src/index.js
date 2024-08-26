import React from 'react'; // Import React only once
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS file
import SearchBar from './landing_page/SearchBar'; // Import your SearchBar component

const styles = {
  container: {
    backgroundImage: 'url(/pexels-andre-furtado-43594-2916820.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',  // Adjust this value to control spacing
    fontSize: '24px',
    color: '#fff', // Ensure the heading text is visible against the background
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={styles.container}>
      
      <SearchBar onSearch={(query) => console.log(query)} />
    </div>
  </React.StrictMode>
);
