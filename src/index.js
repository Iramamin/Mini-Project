import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './landing_page/SearchBar';

const styles = {
  container: {
    backgroundImage: 'url(/pexels-andre-furtado-43594-2916820.jpg)',
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
    marginBottom: '20px',
    fontSize: '24px',
    color: '#fff',
  },
  circlesSection: {
    marginTop: '10vh',
    paddingBottom: '40px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circlesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  circle: {
    width: '300px',  // Change size here
    height: '300px', // Change size here
    borderRadius: '50%',
    backgroundColor: '#2196F3',  // Change color here
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '24px', // Adjust text size if needed
  },
  subtext: {
    marginTop: '10px',
    fontSize: '16px', // Adjust subtext size if needed
    color: '#fff',
  },
  spacer: {
    height: '200px',
  },
};

const Circle = ({ text, subtext }) => (
  <div style={styles.circle}>
    <div>{text}</div>
    <div style={styles.subtext}>{subtext}</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Travel Partner Search</h1>
        <SearchBar onSearch={(query) => console.log(query)} />
      </div>
      <div style={styles.circlesSection}>
        <div style={styles.circlesContainer}>
          <Circle text="Find a travel Buddy!" subtext="fryug" />
          <Circle text="Plan a Trip!" subtext="Find iteneraries at best prices!" />
          <Circle text="Journal Your Experiences!" subtext="Subtext 3" />
        </div>
      </div>
      <div style={styles.spacer}></div>
    </div>
  </React.StrictMode>
);
