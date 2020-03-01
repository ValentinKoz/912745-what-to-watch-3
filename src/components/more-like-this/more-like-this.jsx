import React from "react";
import ListMovie from "../list-movie/list-movie.jsx";
import PropTypes from "prop-types";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item.js";

const ListMovieWrapped = withActiveItem(ListMovie);

const MoreLikeThis = React.memo((props) => {
  const {currentGenre, currentFilm, onCardClickHandle, films} = props;
  const filmsLikeThis = films.filter((film) => film.genre === currentGenre && film.title !== currentFilm.title);
  if (filmsLikeThis.length > 4) {
    filmsLikeThis.splice(4);
  }

  return (<div className="page-content">
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <ListMovieWrapped films={filmsLikeThis} onCardClickHandle={onCardClickHandle} />
    </section>
  </div>);
});

MoreLikeThis.displayName = `MoreLikeThis`;

MoreLikeThis.propTypes = {
  onCardClickHandle: PropTypes.func.isRequired,
  currentFilm: PropTypes.object.isRequired,
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

export default MoreLikeThis;
