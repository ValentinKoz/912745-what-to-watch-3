import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FullVideoPlayer = (props) => {
  const {movie, isPlaying, _videoRef, getRemainingTime, handleLoadMetaData, handleFullScreen, getProgress, handleTimeUpdate, handleVideoPlay} = props;
  return (<div className="player">
    <video ref={_videoRef} autoPlay={`autoplay`} onLoadedMetadata={handleLoadMetaData} className="player__video" poster={movie.preview} onTimeUpdate={handleTimeUpdate}>
      <source src={movie.video}/>
    </video>

    <Link to={`/`} type="button" className="player__exit">Exit</Link>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={getProgress()} max="100"></progress>
          <div className="player__toggler" style={{left: `${getProgress()}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{getRemainingTime()}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" onClick={handleVideoPlay}>
          {isPlaying ? (
          <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
          </>
          ) : (
          <>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
          </svg>
          <span>Play</span>
          </>
          )}
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen" onClick={handleFullScreen}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>);
};

FullVideoPlayer.propTypes = {
  movie: PropTypes.shape({
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
  isPlaying: PropTypes.bool.isRequired,
  _videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  getRemainingTime: PropTypes.func.isRequired,
  handleLoadMetaData: PropTypes.func.isRequired,
  handleFullScreen: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  handleTimeUpdate: PropTypes.func.isRequired,
  handleVideoPlay: PropTypes.func.isRequired,
};

export default FullVideoPlayer;
