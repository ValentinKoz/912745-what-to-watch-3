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
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {withRating} from "./../../hocs/with-rating/with-rating.js";
import {Namespace} from "./../../mocks/settings.js";
import history from "./../../history.js";

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
    const {login, activeId, postComment, showPlayer, onShowPlayer, films} = this.props;
    const film = films.find((movie) => movie.id === activeId);

    return (<Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main
            onCardClickHandle={this.handleSelectFilm}
            showPlayer={showPlayer}
            onShowPlayer={onShowPlayer}
          />
        </Route>
        <Route exact path="/login">
          <SignIn onSubmit={login}/>
        </Route>
        <Route exact path={`/films/${activeId}`}>
          <PageMovie onCardClickHandle={this.handleSelectFilm} film={film} showPlayer={showPlayer} onShowPlayer={onShowPlayer}/>
        </Route>
        <PrivateRoute exact path={`/add-review/${activeId}`} render={() => (<AddReviewWrapped postComment={postComment} film={film}/>)}/>
      </Switch>
    </Router>);
  }

}

const mapStateToProps = (state) => ({
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
  films: PropTypes.array,
  login: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  onShowPlayer: PropTypes.func.isRequired,
  showPlayer: PropTypes.bool.isRequired,
  onSetActiveId: PropTypes.func.isRequired,
  activeId: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
