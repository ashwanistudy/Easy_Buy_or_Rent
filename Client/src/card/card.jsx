import React from 'react';
import './Card.css';

const Card = ({ image, rating, title, location, strikePrice, discountedPrice, totalPrice, beds, baths, bedrooms }) => {
    return (
        <div className="card">
            <div className="card-fav-button">❤</div>
            <img src={image} alt={title} className="card-image" />
            <div className="card-body">
                <div className="card-rating">
                    <span className="rating-star">⭐</span>
                    <span>{rating}</span>
                </div>
                <div className="card-title">{title}</div>
                <div className="card-location">{location}</div>
                <div className="card-pricing">
                    <span className="strike-price">${strikePrice}</span>
                    <span className="discounted-price">${discountedPrice}/Night</span>
                    <span className="total-price">${totalPrice} Total</span>
                </div>
                <div className="card-details">
                    <div>{beds} Beds</div>
                    <div>{baths} Bath</div>
                    <div>{bedrooms} Bedroom</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
