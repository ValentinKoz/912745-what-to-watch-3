import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import TabList from "./../tab-list/tab-list.jsx";
import MoreLikeThis from "./../more-like-this/more-like-this.jsx";
import {withActiveTab} from "../../hocs/with-active-tab/with-active-tab.js";
import {Operation as Data} from "./../../reducer/data/data.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Namespace} from "./../../mocks/settings.js";

const TabListWrapped = withActiveTab(TabList);

const PageMovie = React.memo((props) => {
  const {film, onCardClickHandle, films, authorizationStatus, changeFavorite} = props;
  const {genre, released, poster, name, backgroundImg, backgroundColor, id, isFavorite} = film;
  return <><section className="movie-card movie-card--full" style={{background: backgroundColor}}>
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={backgroundImg} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH ? (<Link to="/myList">
            <div className="user-block__avatar">
              <img src="../img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </Link>) : (<div className="user-block">
            <Link to="/login" className="user-block__link">Sign in</Link>
          </div>
          )}
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to={`/films/${id}/player`} className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            {isFavorite ?
              (<button onClick={()=> changeFavorite(id, 0)} className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 18 14" width="18" height="14">
                  <use xlinkHref="#in-list"></use>
                </svg>
                <span>My list</span>
              </button>) : (<button onClick={()=> changeFavorite(id, 1)} className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>)}
            {authorizationStatus === AuthorizationStatus.AUTH && (<Link to={`/films/:${id}/review`} className="btn movie-card__button">Add review</Link>)}
          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={poster} alt={name} width="218" height="327" />
        </div>
        <TabListWrapped film={film}/>
      </div>
    </div>
  </section>
  <MoreLikeThis films={films} currentGenre={genre} currentFilm={film} onCardClickHandle={onCardClickHandle}/>
  </>;
});
const mapStateToProps = (state) => ({
  films: state[Namespace.DATA].films,
  authorizationStatus: state[Namespace.USER].authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavorite: (id, status) => dispatch(Data.changeFavorite({id, status})),
});


PageMovie.displayName = `PageMovie`;

PageMovie.propTypes = {
  film: PropTypes.object.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  changeFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

export {PageMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
