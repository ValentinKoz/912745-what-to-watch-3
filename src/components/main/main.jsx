import React from "react";
import PropTypes from "prop-types";
import ListGenres from "./../list-genres/list-genres.jsx";
import FullVideoPlayer from "./../full-video-player/full-video-player.jsx";
import {withFullScreenPlayer} from "../../hocs/with-full-screen-player/with-full-screen-player.js";
import films from "./../../mocks/films.js";

const FullVideoPlayerWrapped = withFullScreenPlayer(FullVideoPlayer);

const Main = React.memo((props) => {
  const {genre, titleFilm, releaseDate, onCardClickHandle, showPlayer, onShowPlayer} = props;

  return showPlayer ? (
    <FullVideoPlayerWrapped
      onExit={onShowPlayer}
      movie={films[0]}
    />
  ) : (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt={titleFilm} />
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
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{titleFilm}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={onShowPlayer} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
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
  </React.Fragment>);
});

Main.displayName = `Main`;

Main.propTypes = {
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.array,
  showPlayer: PropTypes.bool.isRequired,
  onShowPlayer: PropTypes.func.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
};

export default Main;
