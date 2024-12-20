import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './component/card/card';

function Card() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50')
      .then(response => {
        const formattedData = response.data.map(item => ({
          id: item.id,
          title: item.title,
          location: 'Random Location', 
          price: `$${Math.floor(Math.random() * 500) + 50}/night`, 
        }));
        console.log(formattedData)
        setListings(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load listings');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={styles.loading}>Loading...</h2>;
  if (error) return <h2 style={styles.error}>{error}</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Airbnb-like Homepage</h1>
      <div style={styles.cardGrid}>
        {listings.map(listing => (
          <Card 
            key={listing.id} 
            title={listing.title} 
            location={listing.location} 
            price={listing.price} 
            image={listing.image} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    margin: '20px 0',
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '50px',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: '24px',
    marginTop: '50px',
  }
};

export default Card;
