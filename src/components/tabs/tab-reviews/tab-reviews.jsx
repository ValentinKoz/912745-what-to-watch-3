import React from "react";
import PropTypes from "prop-types";

const TabReviews = (props) => {
  const {film} = props;
  const {reviews} = film;

  const firstCol = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondCol = reviews.slice(Math.ceil(reviews.length / 2), reviews.length);

  return (<div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {firstCol.map((review, i) => <div key={`${review.author}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>
          <footer className="review__details">
            <cite className="review__author">{review.author}</cite>
            <time className="review__date" dateTime="2016-12-24">{review.time}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>)}
    </div>
    <div className="movie-card__reviews-col">
      {secondCol.map((review, i) => <div key={`${review.author}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>
          <footer className="review__details">
            <cite className="review__author">{review.author}</cite>
            <time className="review__date" dateTime="2016-12-24">{review.time}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>)}
    </div>
  </div>);
};

TabReviews.propTypes = {
  film: PropTypes.shape({
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

export default TabReviews;
