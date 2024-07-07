
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import css from './Reviews.module.css';

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);


  // useEffect(() => {
  //   fetchMovieReviews(movieId).then(response => {
  //     setReviews(response.data.results);
  //   });
  // }, [movieId]);


  return (
<>
{reviews.length !== 0 ? (
  <div className={css.reviewsContainer}>
  <h2>Reviews</h2>
  <ul>
    {reviews.map(review => (
      <li key={review.id} className={css.reviewItem}>
        
        <p className={css.reviewAuthor}>{review.author}</p>
        <p className={css.reviewContent}>{review.content}</p>
      </li>
    ))
    }
  </ul>
</div>
  ) : (
    <div><p className={css.noReviews}>No reviews available for this movie</p></div>
  )}
</>
  );
};

export default ReviewsList;
