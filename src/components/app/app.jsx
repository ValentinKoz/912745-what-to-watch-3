import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";
import SignIn from "./../sign-in/sign-in.jsx";
import AddReview from "./../add-review/add-review.jsx";
import PageMovie from "./../page-movie/page-movie.jsx";
import {Operation, AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {withRating} from "./../../hocs/with-rating/with-rating.js";
import {Namespace} from "./../../mocks/settings.js";

const AddReviewWrapped = withRating(AddReview);
class App extends PureComponent {

  _renderApp() {
    const {onSetActiveItem, activeItem, showPlayer, onShowPlayer} = this.props;

    if (!activeItem) {
      return (<Main
        activeItem={activeItem}
        onCardClickHandle={onSetActiveItem}
        showPlayer={showPlayer}
        onShowPlayer={onShowPlayer}
      />);
    } if (activeItem) {
      return (<PageMovie onCardClickHandle={onSetActiveItem} film={activeItem} showPlayer={showPlayer} onShowPlayer={onShowPlayer}/>);
    }
    return null;
  }

  render() {
    const {authorizationStatus, login, activeItem, postComment} = this.props;
    const currentId = activeItem && activeItem.id;

    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/dev-sign">
          {authorizationStatus === AuthorizationStatus.NO_AUTH ?
            (<SignIn onSubmit={login}/>) : (this._renderApp())
          }
        </Route>
        <Route exact path={`/dev-review/${currentId}`} >
          <AddReviewWrapped postComment={postComment} film={activeItem}/>
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

const mapStateToProps = (state) => ({
  authorizationStatus: state[Namespace.USER].authorizationStatus,
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
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  onShowPlayer: PropTypes.func.isRequired,
  showPlayer: PropTypes.bool.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
