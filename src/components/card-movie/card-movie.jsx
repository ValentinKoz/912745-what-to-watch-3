import React from "react";
import PropTypes from "prop-types";
import Video from "../video/video.jsx";
import {withPlaying} from "../../hocs/with-playing/with-playing.js";

const VideoWrapped = withPlaying(Video);

const CardMovie = React.memo((props) => {

  const {film, handleEventHover, handleEventHoverOut, onCardClickHandle, activeId} = props;
  const {name, previewVideo, preview, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleEventHover} onMouseLeave={handleEventHoverOut} onClick={onCardClickHandle}>
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
  handleEventHoverOut: PropTypes.func.isRequired,
  handleEventHover: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  activeId: PropTypes.string,
  film: PropTypes.object.isRequired,
};

export default CardMovie;
