import React from "react";
import PropTypes from "prop-types";

const getList = (stars) => {
  let starList = [];
  stars.forEach((star, i) => {
    starList.push(`${star},`);
    starList.push(<br key={`${star}-${i}`}/>);
  });
  starList.pop();
  return starList;
};

const TabDetalis = (props) => {
  const {film} = props;
  const {director, starring, runTime, genre, releaseDate} = film;
  return (<div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {getList(starring.split(`,`))}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{runTime}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{releaseDate}</span>
      </p>
    </div>
  </div>);
};

TabDetalis.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabDetalis;
