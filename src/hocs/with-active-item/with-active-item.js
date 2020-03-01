import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this.handleSetActiveItem = this.handleSetActiveItem.bind(this);
    }

    handleSetActiveItem(film) {
      this.setState({activeItem: film});
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          onSetActiveItem={this.handleSetActiveItem}
          activeItem={activeItem}
        />
      );
    }
  }
  WithActiveItem.propTypes = {
    films: PropTypes.array.isRequired,
    onCardClickHandle: PropTypes.func,
  };

  return WithActiveItem;
};
