import React from "react";
import PropTypes from "prop-types";

const TabOverview = (props) => {
  const {film} = props;
  const {ratingScore, ratingLevel, ratingCount, director, starring, text} = film;
  return (<>
    <div className="movie-rating">
      <div className="movie-rating__score">{ratingScore}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{`${ratingCount} ratings`}</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{text}</p>

      <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>

      <p className="movie-card__starring"><strong>{`Starring: ${starring}`}</strong></p>
    </div>
    </>);
};

TabOverview.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabOverview;
