import React from "react";
import PropTypes from "prop-types";

const TabReviews = (props) => {
  const {comments} = props;

  const firstCol = comments.slice(0, Math.ceil(comments.length / 2));
  const secondCol = comments.slice(Math.ceil(comments.length / 2), comments.length);

  return (<div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {firstCol.map((comment, i) => <div key={`${comment.user.name}-${comment.user.id}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.date}>{comment.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{comment.rating}</div>
      </div>)}
    </div>
    <div className="movie-card__reviews-col">
      {secondCol.map((comment, i) => <div key={`${comment.user.name}-${comment.user.id}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.date}>{comment.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{comment.rating}</div>
      </div>)}
    </div>
  </div>);
};

TabReviews.propTypes = {
  comments: PropTypes.array,
};

export default TabReviews;
