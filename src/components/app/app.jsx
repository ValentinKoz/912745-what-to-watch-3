import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";

const playButtonHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null,
    };

    this.onCardClickHandle = this.onCardClickHandle.bind(this);
  }

  onCardClickHandle(film) {
    this.setState({currentFilm: film});
  }


  _renderApp() {
    const {genre, titleFilm, releaseDate, films} = this.props;
    const {currentFilm} = this.state;

    if (!currentFilm) {
      return (<Main
        genre={genre}
        titleFilm={titleFilm}
        releaseDate={releaseDate}
        onPlayButtonClick={playButtonHandler}
        onCardClickHandle={this.onCardClickHandle}
      />);
    } if (currentFilm) {
      return (<PageMovie films={films} onCardClickHandle={this.onCardClickHandle} film={currentFilm}/>);
    }
    return null;
  }

  render() {
    const {films} = this.props;
    const film = films[0];

    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/dev-component">
          <PageMovie films={films} onCardClickHandle={this.onCardClickHandle} film={film}/>
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.array
};

export default App;
