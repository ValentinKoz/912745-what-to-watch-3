import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class Video extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
    };

    this._videoRef = createRef();

  }

  componentDidMount() {
    const {video} = this.props;
    const videoPlayer = this._videoRef.current;

    videoPlayer.src = video;

    videoPlayer.onplay = () => this.setState({
      isPlaying: true,
    });

    videoPlayer.onpause = () => this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    const videoPlayer = this._videoRef.current;

    videoPlayer.play = null;
    videoPlayer.pause = null;
    videoPlayer.src = ``;
  }

  componentDidUpdate() {
    const {video} = this.props;
    const videoPlayer = this._videoRef.current;

    if (this.props.isPlaying) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
      videoPlayer.src = video;
    }
  }

  render() {
    const {video, poster} = this.props;
    return (
      <video ref={this._videoRef} width="280" height="175" muted poster={poster} src={video}/>
    );
  }
}

Video.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  video: PropTypes.string,
  poster: PropTypes.string.isRequired,
};
