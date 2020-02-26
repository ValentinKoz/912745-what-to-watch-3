import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {genres} from "./../../mocks/settings.js";
import {ActionCreator} from "../../reducer.js";
import ListMovie from "./../list-movie/list-movie.jsx";

const ListGenres = (props) => {

  const {onCardClickHandle, films, genre, onChangeGenre} = props;

  return (<section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) => <li key={`${genreItem}-${i}`} className={`catalog__genres-item ${genre === genreItem ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={() => onChangeGenre(genreItem)}>{genreItem}</a>
      </li>)}
    </ul>
    <ListMovie films={films} onCardClickHandle={onCardClickHandle} />
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>);

};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.genre === `All genres` ? state.films : state.films.filter((film) => film.genre === state.genre)
});
const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => dispatch(ActionCreator.changeGenre(genre)),
});

ListGenres.propTypes = {
  genre: PropTypes.string.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  films: PropTypes.array,
};

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
