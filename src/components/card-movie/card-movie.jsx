import React from "react";
import PropTypes from "prop-types";
import Video from "../video/video.jsx";

const CardMovie = (props) => {

  const {film, handleEventHover, onCardClickHandle} = props;
  const {title, bgPoster, video} = film;

//<img src={poster} alt={title} width="280" height="175"/>
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleEventHover}>
      <div className="small-movie-card__image" onClick={onCardClickHandle}>
        <Video poster={bgPoster} video={video} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#" onClick={onCardClickHandle}>{title}</a>
      </h3>
    </article>
  );
};

CardMovie.propTypes = {
  onCardClickHandle: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgPoster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired
};

export default CardMovie;
