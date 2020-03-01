import React from "react";
import PropTypes from "prop-types";
import Video from "../video/video.jsx";

const CardMovie = React.memo((props) => {

  const {film, handleEventHover, handleEventHoverOut, onCardClickHandle, activeCard} = props;
  const {title, bgPoster, video} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleEventHover} onMouseLeave={handleEventHoverOut} onClick={onCardClickHandle}>
      <div className="small-movie-card__image">
        <Video isPlaying={activeCard === film} poster={bgPoster} video={video}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#" onClick={onCardClickHandle}>{title}</a>
      </h3>
    </article>
  );
});

CardMovie.displayName = `CardMovie`;

CardMovie.propTypes = {
  handleEventHoverOut: PropTypes.func.isRequired,
  handleEventHover: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  activeCard: PropTypes.object,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgPoster: PropTypes.string.isRequired,
    video: PropTypes.string,
  }).isRequired
};

export default CardMovie;
