import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const {video, poster, _videoRef} = props;
  return (
    <video ref={_videoRef} width="280" height="175" poster={poster} src={video}/>
  );
};

Video.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  video: PropTypes.string,
  poster: PropTypes.string.isRequired,
  _videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
};

export default Video;
