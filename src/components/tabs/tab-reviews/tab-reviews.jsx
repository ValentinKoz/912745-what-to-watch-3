import React from "react";
import PropTypes from "prop-types";
import {getDate} from "./../../../settings/settings.js";

const TabReviews = (props) => {
  const {comments} = props;

  const firstColumns = comments.slice(0, Math.ceil(comments.length / 2));
  const secondColumns = comments.slice(Math.ceil(comments.length / 2), comments.length);

  return (<div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {firstColumns.map((comment, i) => <div key={`${comment.user.name}-${comment.user.id}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.date}>{getDate(comment.date)}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{comment.rating}</div>
      </div>)}
    </div>
    <div className="movie-card__reviews-col">
      {secondColumns.map((comment, i) => <div key={`${comment.user.name}-${comment.user.id}-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.date}>{getDate(comment.date)}</time>
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
