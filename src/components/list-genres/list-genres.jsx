import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import ListMovie from "./../list-movie/list-movie.jsx";

const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`]
//catalog__genres-item--active
class ListGenres extends PureComponent {
  
  render() {
    const {onCardClickHandle, films, genre} = this.props;

    return (<section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
      {genres.map((genre, i) => <li key={`${genre}-${i}`} className={`catalog__genres-item ${props.genre === genre ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>)}
      </ul>
      <ListMovie films={films} onCardClickHandle={onCardClickHandle} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>);
  }

};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films
});
const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {dispatch(ActionCreator.changeGenre(genre));
  }
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
