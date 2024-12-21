import React, { useEffect, useState } from 'react';
import '../MyCard/Card.css';
import { useSelector } from 'react-redux';


function CardPage({ title, beds, baths, bedrooms }) {

const Home_Page_Data = useSelector((state)=>state.HomePageData)
  
const [listings, setListings] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const [filterdata , setfilterdata] = useState("") 
const [selectedCard, setSelectedCard] = useState(null);
const [isPopupOpen, setIsPopupOpen] = useState(false);


// fetching data all cards 

// const fetchCards = async () => {
  // try {
  //   const response = await axios.get(
  //     'https://shre-5279e-default-rtdb.firebaseio.com/cards.json'
  //   );
  //   if (response.data) {
  //     const formattedData = Object.entries(response.data)
  //       .map(([id, data]) => ({
  //         id,
  //         ...data,
  //       }))
        
  //     setListings(formattedData);
  //     setfilterdata(formattedData);
  //   }
  // } catch (error) {
  //   setError('Failed to load cards. Please try again later.');
  //   console.error('Error fetching cards:', error);
  // } finally {
  //   setLoading(false);
  // }
  
// };

// searching function 

function HandleSearch(e) {
  
  const searchtext = e.target.value.toLowerCase();
  if (searchtext === "") {
    setListings(Home_Page_Data);
  } else {
    const searchdata = Home_Page_Data.filter((ele) =>{
      let name = ele.name || ele.propertyName
     return name.toLowerCase().includes(searchtext) || ele.location.toLowerCase().includes(searchtext) 
    });
    setListings(searchdata);
  }
}

 function viewAllDetails(card) {
  setSelectedCard(card); 
  setIsPopupOpen(true); 
}

function closePopup() {
  setIsPopupOpen(false);
  setSelectedCard(null);
}

useEffect(() => {
  // fetchCards()
  setListings(Home_Page_Data)

}, [Home_Page_Data]);


return (
  <>

 <div id="write">
       <h2> Welcome to Sweet Home Real Estate </h2>
        <p>Find your dream home with us! Whether you're buying, selling, or renting, we make the process smooth and enjoyable.</p>
        </div>

{/* searching filtering  */}

<div className="watermarkhome"> 
  
  <div className='innerwater'> <p>At Sweet Home Real Estate, we believe in 
  providing personalized service to each of our clients. Our team of experts is dedicated to helping you 
  find the perfect property that meets your needs and exceeds your expectations.</p></div>
  
  <div className='search'>
    <p>Looking for the perfect home? Use our advanced search tool to filter listings by location, price, size, and more</p>
  <input 
  placeholder='Search Your Dream house here             🔍'
  onInput={HandleSearch}
  />
  </div>

   </div>

{/* all cards in cards conatiner */}
   <div className="bodyContainer">
      {listings.map((listing, i) => (
  
      <div className="card" key={i+1} >
          
           <div className="card-fav-button">❤</div>
           <img src={listing.image} alt={title} className="card-image" />
              <div className="card-body">
                 <div className="card-rating">
                      <span className="rating-star">⭐</span>
                       <span>{listing.rating}</span>
             </div>
               <div className="card-title">{listing.name}</div>
                  <div className="card-location">{listing.location} </div>
                  <div className="card-pricing">
                    <span className="strike-price">{listing.strike_price
                    }</span>
                 
                   <span className="total-price">{listing.price} Total</span>
                   </div>
                   <div className="card-details">
                 <div>{beds} Beds</div>
                    <div>{baths} Bath</div>
                    <div>{bedrooms} Bedroom</div>
                 </div>
 <div className='profileSide'>
  <button onClick={()=>viewAllDetails(listing.id)}>View Details</button>
  <button >contact</button>
  </div>

             </div>
            </div>
      ))}
  </div>
  
  {isPopupOpen && selectedCard && (
        <div className="popup-overlay" onClick={closePopup}>
        
            <button className="popup-close-button" onClick={closePopup}>
              ✖
            </button>
           
         
        </div>
      )}
</>
);
}








export default CardPage;
