import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class Video extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  };

  playVideo() {
    const audio = this._videoRef.current;
    audio.play();
  }

  stopVideo() {
    const audio = this._videoRef.current;
    audio.pause();
  }

  render() {
    const {video, poster, handleVideoHover} = this.props;
    return (<video ref={this._videoRef} controls onMouseOver={this.playVideo} onMouseOut={this.stopVideo} width="280" height="175" muted poster={poster}><source src={video}/></video>);
  }
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}
