import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ListGenres from "./../list-genres/list-genres.jsx";
import {Operation as Data} from "./../../reducer/data/data.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {Namespace} from "./../../settings/settings.js";
import {Path} from "./../../settings/settings.js";

class Main extends PureComponent {

  componentDidMount() {
    this.props.onSetActiveIdNull(null);
  }

  render() {
    const {onCardClickHandle, promo, authorizationStatus, changeFavorite, authInfo} = this.props;
    const {backgroundImg, name, poster, genre, released, isFavorite, id} = promo;

    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImg} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH ? (<Link to={Path.MY_LIST}>
              <div className="user-block__avatar">
                <img src={`https://htmlacademy-react-3.appspot.com/${authInfo.avatarUrl}`} alt="User avatar" width="63" height="63" />
              </div>
            </Link>) : (<div className="user-block">
              <Link to={Path.LOGIN} className="user-block__link">Sign in</Link>
            </div>
            )}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${Path.FILMS}${Path.PLAYER}/${promo.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <ListGenres onCardClickHandle={onCardClickHandle} />

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  promo: state[Namespace.DATA].promo,
  authorizationStatus: state[Namespace.USER].authorizationStatus,
  authInfo: state[Namespace.USER].authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavorite: (id, status) => dispatch(Data.changeFavorite({id, status})),
});

Main.displayName = `Main`;

Main.propTypes = {
  promo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    preview: PropTypes.string,
    backgroundImg: PropTypes.string,
    backgroundColor: PropTypes.string,
    video: PropTypes.string,
    previewVideo: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  authInfo: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  onSetActiveIdNull: PropTypes.func.isRequired,
  changeFavorite: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
