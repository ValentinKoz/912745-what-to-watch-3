import React, {PureComponent} from "react";
import ListMovie from "../list-movie/list-movie.jsx";
import PropTypes from "prop-types";

class MoreLikeThis extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {currentGenre, currentFilm, onCardClickHandle, films} = this.props;
    const filmsLikeThis = films.filter((film) => film.genre === currentGenre && film.title !== currentFilm.title);
    if (filmsLikeThis.length > 4) {
      filmsLikeThis.splice(4);
    }

    return (<div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <ListMovie films={filmsLikeThis} onCardClickHandle={onCardClickHandle} />
      </section>
    </div>);
  }
}

MoreLikeThis.propTypes = {
  onCardClickHandle: PropTypes.func.isRequired,
  currentFilm: PropTypes.object.isRequired,
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

export default MoreLikeThis;
