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
import {Namespace} from "./../../mocks/settings.js";
import history from "./../../history.js";

const FullVideoPlayerWrapped = withFullScreenPlayer(FullVideoPlayer);
const AddReviewWrapped = withRating(AddReview);
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSelectFilm = this.handleSelectFilm.bind(this);
  }

  handleSelectFilm(id) {
    history.push(`/films/${id}`);
    this.props.onSetActiveId(id);
  }

  render() {
    const {login, activeId, postComment, films, promo, onSetActiveId} = this.props;
    const film = films.find((movie) => movie.id === activeId);

    return (<Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main onCardClickHandle={this.handleSelectFilm} onSetActiveIdNull={onSetActiveId}/>
        </Route>
        <Route exact path="/login">
          <SignIn onSubmit={login}/>
        </Route>
        <Route exact path={`/films/${activeId || promo.id}/player`}>
          <FullVideoPlayerWrapped movie={activeId ? film : promo} />
        </Route>
        <Route exact path={`/films/${activeId}`}>
          <PageMovie onCardClickHandle={this.handleSelectFilm} film={film}/>
        </Route>
        <PrivateRoute exact path={`/films/:${activeId}/review`}
          render={() => (<AddReviewWrapped postComment={postComment} film={film}/>)}
        />
        <PrivateRoute exact path={`/myList`}
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
  }).isRequired,
  login: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  onSetActiveId: PropTypes.func.isRequired,
  activeId: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
