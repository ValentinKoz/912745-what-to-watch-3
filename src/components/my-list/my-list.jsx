import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ListMovie from "./../list-movie/list-movie.jsx";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item.js";
import {Namespace} from "../../mocks/settings.js";
import {Operation} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const ListMovieWrapped = withActiveItem(ListMovie);

class MyList extends PureComponent {

  componentDidMount() {
    const {loadFilms} = this.props;
    loadFilms();
  }

  render() {
    const {favoriteFilms, onCardClickHandle} = this.props;
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
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
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
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(Operation.loadFavorite());
  },
});

MyList.propTypes = {
  favoriteFilms: PropTypes.array,
  loadFilms: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
