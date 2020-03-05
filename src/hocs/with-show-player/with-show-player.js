import React, {PureComponent} from "react";

export const withShowPlayer = (Component) => {
  class WithShowPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showPlayer: false,
      };

      this.handleShowPlayer = this.handleShowPlayer.bind(this);
    }

    handleShowPlayer() {
      this.setState((prevState) => ({showPlayer: !prevState.showPlayer}));
    }

    render() {
      const {showPlayer} = this.state;

      return (
        <Component
          {...this.props}
          showPlayer={showPlayer}
          onShowPlayer={this.handleShowPlayer}
        />
      );
    }
  }
  return WithShowPlayer;
};
