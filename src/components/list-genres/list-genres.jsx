import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {genres} from "./../../mocks/settings.js";
import {ActionCreator} from "../../reducer.js";
import ListMovie from "./../list-movie/list-movie.jsx";
import ShowMoreButton from "./../show-more-button/show-more-button.jsx";

class ListGenres extends PureComponent {
  constructor(props) {
    super(props);
  }

  _shouldHideButton() {
    const {films, displayedItems} = this.props;
    return films.length >= displayedItems ? false : true;
  }

  render() {
    const {onCardClickHandle, films, genre, onChangeGenre, displayedItems, onClickToShowMore} = this.props;

    return (<section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genreItem, i) => <li key={`${genreItem}-${i}`} className={`catalog__genres-item ${genre === genreItem ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={() => onChangeGenre(genreItem)}>{genreItem}</a>
        </li>)}
      </ul>
      <ListMovie films={films.slice(0, displayedItems)} onCardClickHandle={onCardClickHandle} />
      <ShowMoreButton onClickShowMoreHandle={() => onClickToShowMore()} isHidden={this._shouldHideButton()}/>
    </section>);
  }
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.genre === `All genres` ? state.films : state.films.filter((film) => film.genre === state.genre),
  displayedItems: state.displayedItems,
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
  films: PropTypes.array,
};

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
