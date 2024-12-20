import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styling/UserFeedback.css'; // Link to the updated CSS file

export function UserFeedback() {
    const [feedbackData, setFeedbackData] = useState({
        name: "",
        rating: 0,
        comments: ""    
    });

    const [allFeedback, setAllFeedback] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData({ ...feedbackData, [name]: value });
    };

    const handleRating = (rating) => {
        setFeedbackData({ ...feedbackData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://shre-5279e-default-rtdb.firebaseio.com/UserFeedback.json", feedbackData);
            setFeedbackData({ name: "", rating: 0, comments: "" });
            fetchFeedback(); // Fetch new feedback after submission
            setIsPopupOpen(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchFeedback = async () => {
        try {
            const response = await axios.get("https://shre-5279e-default-rtdb.firebaseio.com/UserFeedback.json");
            if (response.data) {
                const formattedData = Object.entries(response.data).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setAllFeedback(formattedData);
            }
        } catch (error) {
            console.log("Error fetching feedback:", error);
        }
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <>
            <button className="open-popup-btn" onClick={() => setIsPopupOpen(true)}>Give Feedback</button>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <h2>Give Us Your Feedback</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={feedbackData.name} 
                                onChange={handleChange} 
                                placeholder="Enter your name" 
                                required 
                            />
                            <label>Rating (1 to 5)</label>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${feedbackData.rating >= star ? "selected" : ""}`}
                                        onClick={() => handleRating(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <label>Comments</label>
                            <textarea
                                name="comments"
                                value={feedbackData.comments}
                                onChange={handleChange}
                                placeholder="Share your thoughts about your experience with us..."
                                required
                            ></textarea>
                            
                            <button type="submit">Submit Feedback</button>
                            <button type="button" onClick={() => setIsPopupOpen(false)}>Close</button>
                        </form>
                    </div>
                </div>
            )}

            <div className="feedback-list">
                <h2>USERS FEEDBACKS</h2>
                <div className="feedback-cards">
                    {allFeedback.map((feedback) => (
                        <div className="feedback-card" key={feedback.id}>
                            <div className="feedback-name">
                                <strong>Name:</strong> {feedback.name}
                            </div>
                            <div className="feedback-comments">
                                <strong>Feedback:</strong> {feedback.comments}
                            </div>
                            <div className="feedback-rating">
                                <strong>Rating:</strong> ⭐ {feedback.rating} / 5
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
