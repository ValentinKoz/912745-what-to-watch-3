import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Namespace} from "./../../settings/settings.js";
import {Link, withRouter} from "react-router-dom";
import {Path} from "./../../settings/settings.js";

const FullVideoPlayer = (props) => {
  const {films, isPlaying, _videoRef, getRemainingTime, onLoadMetaData, onFullScreen, getProgress, onTimeUpdate, onVideoPlay, location} = props;

  if (!films.length) {
    return <></>;
  } else {
    const pathname = location.pathname.split(`/`).pop();
    const movie = films.find((film) => film.id === pathname);
    return (<div className="player">
      <video ref={_videoRef} autoPlay={`autoplay`} onLoadedMetadata={onLoadMetaData} className="player__video" poster={movie.preview} onTimeUpdate={onTimeUpdate}>
        <source src={movie.video}/>
      </video>

      <Link to={Path.MAIN} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getProgress()} max="100"></progress>
            <div className="player__toggler" style={{left: `${getProgress()}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getRemainingTime()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onVideoPlay}>
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

          <button type="button" className="player__full-screen" onClick={onFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
  }
};

const mapStateToProps = (state) => ({
  films: state[Namespace.DATA].films,
});

FullVideoPlayer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  isPlaying: PropTypes.bool.isRequired,
  _videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  location: PropTypes.object,
  getRemainingTime: PropTypes.func.isRequired,
  onLoadMetaData: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onVideoPlay: PropTypes.func.isRequired,
};
export {FullVideoPlayer};
export default connect(mapStateToProps)(withRouter(FullVideoPlayer));
