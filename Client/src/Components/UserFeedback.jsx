
import React, { useState ,useEffect } from "react";
import axios from 'axios';
import '../styling/UserFeedback.css';

export function UserFeedback(){
    const [feedbackData, setFeedbackData] = useState({
        rating: 0,
        comments: ""    
    });

    const [allFeedback, setAllFeedback] = useState([]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData({ ...feedbackData, [name]: value });
    }

    const handleRating = (rating) => {
        setFeedbackData({ ...feedbackData, rating });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://shre-5279e-default-rtdb.firebaseio.com/UserFeedback.json", feedbackData);
            setFeedbackData({ rating: 0, comments: "" });
        } catch (error) {
            console.log("error", error);
        }
    }

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
        fetchFeedback()
    }, []);

    return (
       <>
        <div className="feedback-container">
            <h2>Give Us Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label>Rating (1 to 5)</label>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${feedbackData.rating >= star ? "selected" : ""}`}
                            onClick={() => handleRating(star)}
                            required
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
            </form>
        </div>

        <div className="feedback-list">
                <h2>USERS FEEDBACKS</h2>
                <ul>
                    {allFeedback.map((feedback) => (
                        <li key={feedback.id}>
                            <strong>Rating:</strong> {feedback.rating} / 5<br />
                            <strong>Comments:</strong> {feedback.comments}
                        </li>
                    ))}
                </ul>
            </div>

 


        </>
    );
}

