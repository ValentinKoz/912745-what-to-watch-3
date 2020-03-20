import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeId: null
      };

      this.handleSetActiveId = this.handleSetActiveId.bind(this);
    }

    handleSetActiveId(id) {
      this.setState({activeId: id});
    }

    render() {
      const {activeId} = this.state;

      return (
        <Component
          {...this.props}
          onSetActiveId={this.handleSetActiveId}
          activeId={activeId}
        />
      );
    }
  }
  WithActiveItem.propTypes = {
    onCardClickHandle: PropTypes.func,
  };

  return WithActiveItem;
};
