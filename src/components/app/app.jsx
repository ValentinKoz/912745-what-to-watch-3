import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import SignIn from "./../sign-in/sign-in.jsx";
import AddReview from "./../add-review/add-review.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";
import {Operation} from "../../reducer/user/user.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {withFullScreenPlayer} from "../../hocs/with-full-screen-player/with-full-screen-player.js";
import FullVideoPlayer from "./../full-video-player/full-video-player.jsx";
import MyList from "./../my-list/my-list.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {withRating} from "./../../hocs/with-rating/with-rating.js";
import {Namespace} from "./../../settings/settings.js";
import history from "./../../history.js";
import {Path} from "./../../settings/settings.js";

const FullVideoPlayerWrapped = withFullScreenPlayer(FullVideoPlayer);
const AddReviewWrapped = withRating(AddReview);
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSelectFilm = this.handleSelectFilm.bind(this);
  }

  handleSelectFilm(id) {
    history.push(`${Path.FILMS}/${id}`);
    this.props.onSetActiveId(id);
  }

  render() {
    const {login, activeId, postComment, films, onSetActiveId} = this.props;
    const film = films.find((movie) => movie.id === activeId);
    return (<Router history={history}>
      <Switch>
        <Route exact path={Path.MAIN}>
          <Main onCardClickHandle={this.handleSelectFilm} onSetActiveIdNull={onSetActiveId}/>
        </Route>
        <Route exact path={Path.LOGIN}>
          <SignIn onSubmit={login}/>
        </Route>
        <Route exact path={`${Path.FILMS}${Path.PLAYER}/:id`}>
          <FullVideoPlayerWrapped />
        </Route>
        <Route exact path={`${Path.FILMS}/:id`}>
          <PageMovie onCardClickHandle={this.handleSelectFilm}/>
        </Route>
        <PrivateRoute exact path={`${Path.FILMS}/:id${Path.REVIEW}`}
          render={() => (<AddReviewWrapped postComment={postComment} film={film}/>)}
        />
        <PrivateRoute exact path={Path.MY_LIST}
          render={() => (<MyList onCardClickHandle={this.handleSelectFilm} />)}
        />
      </Switch>
    </Router>);
  }

}

const mapStateToProps = (state) => ({
  promo: state[Namespace.DATA].promo,
  films: state[Namespace.DATA].films,
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  },
  postComment(commnetData) {
    dispatch(DataOperation.postComment(commnetData));
  }
});

App.propTypes = {
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
  }),
  login: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  onSetActiveId: PropTypes.func.isRequired,
  activeId: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
