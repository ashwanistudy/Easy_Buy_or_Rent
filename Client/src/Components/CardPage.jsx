import React, { useEffect, useState } from 'react';
import '../MyCard/Card.css';
import { useSelector } from 'react-redux';

function CardPage({ title, beds, baths, bedrooms }) {
  const Home_Page_Data = useSelector((state) => state.HomePageData);

  const [listings, setListings] = useState([]);
  const [displayedListings, setDisplayedListings] = useState([]);
  // const [currentBatch, setCurrentBatch] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('all'); 


  const platformFees = 5000;
  // const show = 12;

  // const handleLoadMore = () => {
  //   const nextBatch = listings.slice(
  //     0,
  //     show * (currentBatch +1)
  //   );
  //   setDisplayedListings(nextBatch);
  //   setCurrentBatch(currentBatch+1);
  // };



  // Fetching data and setting it to state
  useEffect(() => {
    setListings(Home_Page_Data);
    console.log(Home_Page_Data)
    // setDisplayedListings(Home_Page_Data.slice(0, show));
  }, [Home_Page_Data]);

  // Sort function to order by rating
  const sortListingsByRating = (order) => {
    const sortedListings = [...listings].sort((a, b) => {
      if(order == "all"){
        setListings(selectedCard);
      }
      if (order === 'asc') {
        return a.rating - b.rating; // Sort in ascending order
      } else {
        return b.rating - a.rating; // Sort in descending order
      }
    });
    setListings(sortedListings);
  };

  // Handle the sorting order change
  const handleSortOrderChange = (e) => {
    const selectedOrder = e.target.value;
    
    setSortOrder(selectedOrder);
    sortListingsByRating(selectedOrder);
  };

  // Calculate tax for the total payment
  function calTax(num) {
    return (num * 0.18).toFixed(2);
  }

  // Handle search functionality
  function HandleSearch(e) {
    const searchtext = e.target.value.toLowerCase();
    if (searchtext === '') {
      setListings(Home_Page_Data);
    } else {
      const searchdata = Home_Page_Data.filter((ele) => {
        let name = ele.name || ele.propertyName;
        return name.toLowerCase().includes(searchtext) || ele.location.toLowerCase().includes(searchtext);
      });
      setListings(searchdata);
    }
  }

  // Open the details popup
  function viewAllDetails(card) {
    setSelectedCard(card);
    setIsPopupOpen(true);
  }

  // Close the popup
  function closePopup() {
    setIsPopupOpen(false);
  }
 
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
  find the perfect property that meets your needs and exceeds your expectations.</p>
   {/* Sorting by Rating */}

   <div className="filtering">
         
         <select value={sortOrder} onChange={handleSortOrderChange} style={{height:"2.4rem", borderRadius:"5px", marginTop:"-25px"}}>
           <option value="all">Sort By Rating</option>
           <option value="asc">Low to High</option>
           <option value="desc">High to low</option>
         </select>

         <input id='srch'
  placeholder='Search Your Dream house here             🔍'
  onInput={HandleSearch} style={{height:"1rem",marginTop:"-25px"}}
  />
       
       </div>
     
       </div>
  
  
  <div className='search'>
    {/* <p>Looking for the perfect home? Use our advanced search tool to filter listings by location, price, size, and more</p> */}
    <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/025cc9a1-7746-4cd5-9dde-d50803c73b1d.jpeg?im_w=720&im_format=avif" alt="" />
  
  
  
 
     
  </div>

   </div>



    
      {/* All cards in the cards container */}
      <div className="bodyContainer">
        
        {listings.map((listing, i) => (
          
          <div className="card" key={i + 1}>
            <div className="card-fav-button">❤</div>
            <img src={listing.image} alt={title} className="card-image" />
            <div className="card-body">
              <div className="card-rating">
                <span className="rating-star">⭐</span>
                <span>{listing.rating}</span>
              </div>
              <div className="card-title">{listing.name}</div>
              <div className="card-location">{listing.location}</div>
              <div className="card-pricing">
                <span className="strike-price">{listing.strike_price}</span>
                <span className="total-price">{listing.price} Total</span>
              </div>
              <div className="card-details">
                <div>{listing.beds || beds} Beds</div>
                <div>{listing.baths || baths} Bath</div>
                <div>{listing.bedrooms || bedrooms} Bedroom</div>
              </div>
              <div className="profileSide">
              <button onClick={() => viewAllDetails(listing)} id='details'> View Details</button>
               
              </div>
            </div>
          </div>
        ))}
        
       
      </div>

<div className='showdata'>
      {/* <button onClick={handleLoadMore}>Show More ...</button> */}
      </div>


      {isPopupOpen && selectedCard && (
        <div className="popup-overlay" onClick={closePopup}>

          <div>
            <button className="popup-close-button" onClick={closePopup}>✖</button>
          </div>

          <div className="popup-content">
            <h2>{selectedCard.name}</h2>
            <img src={selectedCard.image} alt={selectedCard.name} className="popup-image" />
           <p> <strong>Location:</strong> {selectedCard.location} <br></br><br></br>
            <strong>Price:</strong> {selectedCard.price}<br></br><br></br>
           <strong>Details:</strong>  Beds, Baths, Bedrooms
           </p> </div>
          <div className="popup-content2">
            <table className="popup-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Price</b></td>
                  <td>{selectedCard.price} /-</td>
                </tr>
                <tr>
                  <td><b>Tax (18%)</b></td>
                  <td>{calTax(selectedCard.price)} /-</td>
                </tr>
                <tr>
                  <td><b>Platform Fees</b></td>
                  <td>{platformFees} /-</td>
                </tr>
                <tr style={{ backgroundColor: "red", color: "white" }}>
                  <td><b>Gross Total </b></td>
                  <td>{(
                    +(selectedCard.price) +
                    +(calTax(selectedCard.price)) +
                    platformFees
                  )} /-</td>
                </tr>
              </tbody>
            </table>
            <span id="edittext">Pay online to get 3% off</span>
            <button>
              <span style={{ fontSize: 16 }}>PAY ONLINE</span> <strike>{(
                +(selectedCard.price) +
                +(calTax(selectedCard.price)) +
                platformFees
              )}</strike> {(
                +(selectedCard.price) +
                +(calTax(selectedCard.price)) +
                platformFees * 0.3
              )} /-
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CardPage;
