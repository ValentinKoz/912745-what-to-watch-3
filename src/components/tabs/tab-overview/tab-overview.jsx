import React from "react";
import PropTypes from "prop-types";

const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Vary good`;
  } else if (rating === 10) {
    return `Awesome`;
  }
  return ``;
};

const TabOverview = (props) => {
  const {film} = props;
  const {director, starring, description, rating, scoresCount} = film;
  return (<>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingLevel(rating)}</span>
        <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>

      <p className="movie-card__starring"><strong>{`Starring: ${starring.join(`, `)}`}</strong></p>
    </div>
    </>);
};

TabOverview.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    scoresCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabOverview;
