import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export const withFullScreenPlayer = (Component) => {
  class WithFullScreenPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        duration: 0,
        currentTime: 0,
      };

      this._videoRef = createRef();
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
      this.handleFullScreen = this.handleFullScreen.bind(this);
      this.handleVideoPlay = this.handleVideoPlay.bind(this);
      this.handleLoadMetaData = this.handleLoadMetaData.bind(this);
      this.getProgress = this.getProgress.bind(this);
      this.getRemainingTime = this.getRemainingTime.bind(this);
    }

    handleVideoPlay() {
      const video = this._videoRef.current;

      if (video.paused) {
        video.play();
        this.setState({isPlaying: true});
      } else {
        video.pause();
        this.setState({isPlaying: false});
      }
    }

    handleTimeUpdate(evt) {
      this.setState({
        currentTime: Math.floor(evt.target.currentTime)
      });
    }

    getProgress() {
      return String((this.state.currentTime / this.state.duration) * 100);
    }

    handleFullScreen() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    handleLoadMetaData(evt) {
      this.setState({
        duration: Math.floor(evt.target.duration)
      });
    }

    getRemainingTime() {
      const dif = this.state.duration - this.state.currentTime;
      return `${Math.floor(dif / 3600)}:${Math.floor(dif / 60)}:${dif % 60}`;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.play = null;
      video.pause = null;
      video.src = null;
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          _videoRef={this._videoRef}
          getRemainingTime={this.getRemainingTime}
          handleLoadMetaData={this.handleLoadMetaData}
          handleFullScreen={this.handleFullScreen}
          getProgress={this.getProgress}
          handleTimeUpdate={this.handleTimeUpdate}
          handleVideoPlay={this.handleVideoPlay}
        />
      );
    }
  }
  WithFullScreenPlayer.propTypes = {
    onExit: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
  };

  return WithFullScreenPlayer;
};
