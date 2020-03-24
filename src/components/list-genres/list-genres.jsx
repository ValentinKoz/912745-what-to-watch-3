import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import ListMovie from "./../list-movie/list-movie.jsx";
import ShowMoreButton from "./../show-more-button/show-more-button.jsx";
import {getFilmsByGenre} from "../../reducer/selectors.js";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item.js";
import {Namespace} from "./../../settings/settings.js";

const ListMovieWrapped = withActiveItem(ListMovie);

class ListGenres extends PureComponent {

  _shouldHideButton() {
    const {displayedItems, filteredFilms} = this.props;
    return filteredFilms.length >= displayedItems ? false : true;
  }

  getGenres(films) {
    const genres = [`All genres`];
    for (const film of films) {
      if (genres.indexOf(film.genre) === -1) {
        genres.push(film.genre);
      }
    }
    return genres;
  }

  render() {
    const {onCardClickHandle, films, genre, onChangeGenre, displayedItems, filteredFilms, onClickToShowMore} = this.props;
    const genres = this.getGenres(films);

    return (<section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genreItem, i) => <li key={`${genreItem}-${i}`} className={`catalog__genres-item ${genre === genreItem ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={() => onChangeGenre(genreItem)}>{genreItem}</a>
        </li>)}
      </ul>
      <ListMovieWrapped films={filteredFilms.slice(0, displayedItems)} onCardClickHandle={onCardClickHandle} />
      <ShowMoreButton onClickShowMoreHandle={() => onClickToShowMore()} isHidden={this._shouldHideButton()}/>
    </section>);
  }
}

const mapStateToProps = (state) => ({
  genre: state[Namespace.STATE].genre,
  films: state[Namespace.DATA].films,
  displayedItems: state[Namespace.STATE].displayedItems,
  filteredFilms: getFilmsByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickToShowMore: () => dispatch(ActionCreator.showMore()),
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetList());
  },
});

ListGenres.propTypes = {
  genre: PropTypes.string.isRequired,
  displayedItems: PropTypes.number.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  onClickToShowMore: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })),
  filteredFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })),
};

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
