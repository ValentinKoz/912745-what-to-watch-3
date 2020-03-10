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

const getRemainingTime = (runTime) => {
  const hour = `${Math.floor(runTime / 3600)}`;
  const minutes = `${Math.floor(runTime / 60)}`;
  const sec = `${Math.floor(runTime % 60)}`;

  const hourStr = hour.length === 2 ? hour : `0${hour}`;
  const minutesStr = minutes.length === 2 ? minutes : `0${minutes}`;
  const secStr = sec.length === 2 ? sec : `0${sec}`;

  return `${hourStr}:${minutesStr}:${secStr}`;
};

const TabDetalis = (props) => {
  const {film} = props;
  const {director, starring, runTime, genre, released} = film;
  return (<div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {getList(starring)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{getRemainingTime(runTime)}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{released}</span>
      </p>
    </div>
  </div>);
};

TabDetalis.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabDetalis;
