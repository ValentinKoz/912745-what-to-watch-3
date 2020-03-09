import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";

class App extends PureComponent {

  _renderApp() {
    const {onSetActiveItem, activeItem, showPlayer, onShowPlayer} = this.props;

    if (!activeItem) {
      return (<Main
        activeItem={activeItem}
        onCardClickHandle={onSetActiveItem}
        showPlayer={showPlayer}
        onShowPlayer={onShowPlayer}
      />);
    } if (activeItem) {
      return (<PageMovie onCardClickHandle={onSetActiveItem} film={activeItem} showPlayer={showPlayer} onShowPlayer={onShowPlayer}/>);
    }
    return null;
  }

  render() {

    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/dev-component">
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  onShowPlayer: PropTypes.func.isRequired,
  showPlayer: PropTypes.bool.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
};

export default App;
