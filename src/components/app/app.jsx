import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";

class App extends PureComponent {

  _renderApp() {
    const {genre, titleFilm, releaseDate, films, onSetActiveItem, activeItem, showPlayer, onShowPlayer} = this.props;

    if (!activeItem) {
      return (<Main
        genre={genre}
        titleFilm={titleFilm}
        releaseDate={releaseDate}
        activeItem={activeItem}
        onCardClickHandle={onSetActiveItem}
        showPlayer={showPlayer}
        onShowPlayer={onShowPlayer}
      />);
    } if (activeItem) {
      return (<PageMovie films={films} onCardClickHandle={onSetActiveItem} film={activeItem} showPlayer={showPlayer} onShowPlayer={onShowPlayer}/>);
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
  showPlayer: PropTypes.bool.isRequired,
  onShowPlayer: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
  films: PropTypes.array
};

export default App;
