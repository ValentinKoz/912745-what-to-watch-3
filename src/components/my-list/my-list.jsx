import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ListMovie from "./../list-movie/list-movie.jsx";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item.js";
import {Namespace} from "../../settings/settings.js";
import {Operation} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const ListMovieWrapped = withActiveItem(ListMovie);

class MyList extends PureComponent {

  componentDidMount() {
    const {loadFilms} = this.props;
    loadFilms();
  }

  render() {
    const {favoriteFilms, onCardClickHandle, authInfo} = this.props;
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src={`https://htmlacademy-react-3.appspot.com/${authInfo.avatarUrl}`} alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListMovieWrapped films={favoriteFilms || []} onCardClickHandle={onCardClickHandle} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  favoriteFilms: state[Namespace.DATA].favoriteFilms,
  authInfo: state[Namespace.USER].authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(Operation.loadFavorite());
  },
});

MyList.propTypes = {
  authInfo: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape({
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
  loadFilms: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
