import React from 'react';
import { useState, useEffect } from 'react';
import activeBook from './activeBook';
import activeUser from './ManagingUsersList/activeUser';
const ReviewForm = ({ setChange, change }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [empty, setEmpty] = useState(true);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!empty) {
            fetch('http://localhost:5182/api/Comments/addComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "user_name": activeUser.user_name,
                    "comment_txt": review,
                    "rate": rating,
                    "book_id": activeBook.book_id
                })
            }).then(res => {
                if (res.ok) {
                    setError(false);
                    setChange(change + 1);

                    // has to be changed!
                } else {
                    setError(true);
                }
            })
            console.log(rating)
            console.log(review)
        }
    };

    return (
        <form className="mt-5 text-center" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="review">Add Your Review:</label>
                <textarea className="form-control" id="review" value={review} onChange={(event) => {
                    setReview(event.target.value)
                    if (event.target.value != "") setEmpty(false); else setEmpty(true)
                }} />
            </div>

            <div className="form-group">
                <br></br>
                <label htmlFor="rating">Rating:</label>
                <input type="number" className="form-control" id="rating" min="1" max="5" value={rating} onChange={(event) => setRating(event.target.value)} />
            </div>
            <br></br>
            {empty ? (<div><strong>Review must contains text!</strong></div>) : <></>}
            {error ? (<div><strong>Error when trying add the comment - please try again</strong></div>) : <></>}
            <button type="submit" className="btn btn-primary text-center">Submit Review</button>
        </form>
    );
};

export default ReviewForm;