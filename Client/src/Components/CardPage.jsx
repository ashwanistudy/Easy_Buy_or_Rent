import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MyCard/Card.css';
import { useSelector } from 'react-redux';



function CardPage({ title, beds, baths, bedrooms }) {

const Home_Page_Data = useSelector((state)=>state.HomePageData)

  
const [listings, setListings] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [filterdata , setfilterdata] = useState("") 
const [selectedCard, setSelectedCard] = useState(null);
const [isPopupOpen, setIsPopupOpen] = useState(false);


// fetching data all cards 


const fetchCards = async () => {
  try {
    const response = await axios.get(
      'https://shre-5279e-default-rtdb.firebaseio.com/cards.json'
    );
    if (response.data) {
      const formattedData = Object.entries(response.data)
        .map(([id, data]) => ({
          id,
          ...data,
        }))
        
      setListings(formattedData);
      setfilterdata(formattedData);
    }
  } catch (error) {
    setError('Failed to load cards. Please try again later.');
    console.error('Error fetching cards:', error);
  } finally {
    setLoading(false);
  }
};








// searching function 

function HandleSearch(e) {
  const searchtext = e.target.value.toLowerCase();
  if (searchtext === "") {
    setListings(filterdata);
  } else {
    const searchdata = filterdata.filter((ele) =>
      ele.name.toLowerCase().includes(searchtext) || 
    ele.location.toLowerCase().includes(searchtext) 
  
    );
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
  fetchCards()
}, []);



return (
  <>

 <div id="write">
       <h2> Welcome to Sweet Home Real Estate </h2>

       <div id="new2">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-797659157916763175/original/abeb45aa-852a-414a-85a2-6e59de118119.jpeg?im_w=720&im_format=avif" alt="" />

          <div className='img1'>
        <h3>Finding your dream home has never been easier! Whether you're looking to buy, sell, or rent, we are here to make the entire process smooth and hassle-free. Our dedicated team works tirelessly
           to connect you with the perfect property that meets your needs and preferences. From initial inquiries to finalizing the deal, we ensure a seamless experience every step of the way. Your satisfaction is our priority, 
           and we aim to make your journey enjoyable and stress-free. Let us help you find a place you’ll love to call home!.</h3>
        </div>
        </div>
        </div>

{/* searching filtering  */}

<div className="watermarkhome"> 
  
  <div className='innerwater'> <p>At Sweet Home Real Estate, we believe in 
  providing personalized service to each of our clients. Our team of experts is dedicated to helping you 
  find the perfect property that meets your needs and exceeds your expectations.</p></div>
  
  
  <div className='search'>
    {/* <p>Looking for the perfect home? Use our advanced search tool to filter listings by location, price, size, and more</p> */}
    <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720&im_format=avif" alt="" />
  
  
  
  <input id='srch'
  placeholder='Search Your Dream house here             🔍'
  onInput={HandleSearch}
  />
  </div>

   </div>

{/* all cards in cards conatiner */}
   <div className="bodyContainer" id='mainRow'>
      {Home_Page_Data.map((listing) => (
    
      <div  id='new1' className="card"key={listing.id} >
          
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
  <button className='btnCo'onClick={()=>viewAllDetails(listing.id)}>View Details</button>
  <button className='btnCo'>contact</button>
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
