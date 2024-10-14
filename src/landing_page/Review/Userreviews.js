import React from 'react';

const styles = {
  reviewsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  },
  reviewCard: {
    width: '300px',
    backgroundColor: '#ffcccb', // Light pink color
    border: '1px solid #ff99aa',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow for depth
    transition: 'transform 0.2s', // Transition for hover effect
  },
  reviewCardHover: {
    transform: 'scale(1.05)', // Scale effect on hover
  },
  image: {
    width: '100%',
    borderRadius: '50%',
    border: '3px solid #fff', // White border around the image
  },
};

const reviewsData = [
  {
    id: 1,
    name: 'Alice',
    review: 'I had an amazing experience traveling with my buddy!',
    imageUrl: 'path/to/alice.jpg', // Change to actual path
  },
  {
    id: 2,
    name: 'Bob',
    review: 'Best trip of my life, thanks to my travel partner!',
    imageUrl: 'path/to/bob.jpg', // Change to actual path
  },
  {
    id: 3,
    name: 'Charlie',
    review: 'We explored so many places together, unforgettable memories!',
    imageUrl: 'path/to/charlie.jpg', // Change to actual path
  },
];

const Userreviews = () => (
  <div style={styles.reviewsSection}>
    {reviewsData.map(({ id, name, review, imageUrl }) => (
      <div
        key={id}
        style={styles.reviewCard}
        className="review-card"
      >
        <img src={imageUrl} alt={name} style={styles.image} />
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    ))}
  </div>
);

// Adding hover effect using JavaScript
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = styles.reviewCardHover.transform;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'none';
};

// Attach event listeners for hover effect
const cards = document.querySelectorAll('.review-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mouseleave', handleMouseLeave);
});

export default Userreviews;
