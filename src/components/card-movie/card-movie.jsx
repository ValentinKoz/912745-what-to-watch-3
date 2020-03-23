import React from "react";
import PropTypes from "prop-types";
import Video from "../video/video.jsx";
import {withPlaying} from "../../hocs/with-playing/with-playing.js";

const VideoWrapped = withPlaying(Video);

const CardMovie = React.memo((props) => {

  const {film, onEventHover, onEventHoverOut, onCardClickHandle, activeId} = props;
  const {name, previewVideo, preview, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onEventHover} onMouseLeave={onEventHoverOut} onClick={onCardClickHandle}>
      <div className="small-movie-card__image">
        <VideoWrapped isPlaying={activeId === id} poster={preview} video={previewVideo}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#" onClick={onCardClickHandle}>{name}</a>
      </h3>
    </article>
  );
});

CardMovie.displayName = `CardMovie`;

CardMovie.propTypes = {
  onEventHoverOut: PropTypes.func.isRequired,
  onEventHover: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  activeId: PropTypes.string,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardMovie;
