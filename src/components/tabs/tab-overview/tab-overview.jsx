import React from "react";
import PropTypes from "prop-types";
import {getRatingLevel} from "./../../../settings/settings.js";

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
