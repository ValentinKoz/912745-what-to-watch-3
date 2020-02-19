import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class Video extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      isPlaying: false,
    };

    this._videoRef = createRef();
    this.isComponentMounted = false;
    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  playVideo() {
    this.setState((prevState) => {
      return {hover: !prevState.hover};
    });

    setTimeout(() => {
      if (this.state.hover && this.isComponentMounted) {
        const video = this._videoRef.current;
        this.setState({isPlaying: true});
        video.play();
      }
    }, 1000);
  }

  stopVideo() {
    this.setState((prevState) => {
      return {hover: !prevState.hover};
    });

    setTimeout(() => {
      if (this.state.isPlaying && this.isComponentMounted) {
        const video = this._videoRef.current;
        video.pause();
        video.src = this.props.video;
        this.setState({isPlaying: false});
      }
    }, 1000);
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    this.isComponentMounted = false;

    video.play = null;
    video.pause = null;
    video.src = ``;
  }

  render() {
    const {video, poster} = this.props;
    return (
      <div className="small-movie-card__image" onMouseOver={this.playVideo} onMouseOut={this.stopVideo}><video ref={this._videoRef} onMouseOver={this.playVideo} onMouseOut={this.stopVideo} width="280" height="175" muted poster={poster}><source src={video}/></video></div>);
  }
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
