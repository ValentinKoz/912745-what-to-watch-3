import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";

const playButtonHandler = () => {};

class App extends PureComponent {

  _renderApp() {
    const {genre, titleFilm, releaseDate, films, onSetActiveItem, activeItem} = this.props;

    if (!activeItem) {
      return (<Main
        genre={genre}
        titleFilm={titleFilm}
        releaseDate={releaseDate}
        onPlayButtonClick={playButtonHandler}
        onCardClickHandle={onSetActiveItem}
      />);
    } if (activeItem) {
      return (<PageMovie films={films} onCardClickHandle={onSetActiveItem} film={activeItem}/>);
    }
    return null;
  }

  render() {
    const {films, onSetActiveItem} = this.props;
    const film = films[0];

    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/dev-component">
          <PageMovie films={films} onCardClickHandle={onSetActiveItem} film={film}/>
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
  films: PropTypes.array
};

export default App;
