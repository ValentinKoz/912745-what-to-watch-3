import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        itemTab: `Overview`,
      };

      this.handleSetActiveTab = this.handleSetActiveTab.bind(this);
    }

    handleSetActiveTab(item) {
      this.setState({itemTab: item});
    }

    render() {
      const {itemTab} = this.state;

      return (
        <Component
          {...this.props}
          itemTab={itemTab}
          onSetActiveTab={this.handleSetActiveTab}
        />
      );
    }
  }
  WithActiveTab.propTypes = {
    film: PropTypes.object.isRequired,
  };

  return WithActiveTab;
};
