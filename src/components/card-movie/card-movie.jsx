import React from "react";
import PropTypes from "prop-types";

const CardMovie = (props) => {

  const {film, handleEventHover} = props;
  const {title, poster} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleEventHover}>
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

CardMovie.propTypes = {
  handleEventHover: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired
};

export default CardMovie;
