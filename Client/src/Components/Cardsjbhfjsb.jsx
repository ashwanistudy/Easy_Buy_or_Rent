import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CardHome() {
  const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const fetchcards = async () => { 
    try {
        const response = await axios.get("https://shre-5279e-default-rtdb.firebaseio.com/cards.json");
        if (response.data) {
            const formattedData = Object.entries(response.data).map(([id, data]) => ({
                id,
                name: data.name || "Unnamed Listing",
                ...data,
            }));
            setListings(formattedData);
        }
    } catch (error) {
        setError(error);
        console.error("Error fetching cards:", error);
    }
};

useEffect(() => {
  fetchcards()
}, []);



  return (
    <div>
    <h2>HOme page</h2>
    <ul>
        {listings.map((post) => (
        
            <li key={post.id}>
                {post.name}
            </li>
            
        ))}
    </ul>
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

export default CardHome;
