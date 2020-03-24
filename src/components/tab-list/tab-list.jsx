import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TabOverview from "../tabs/tab-overview/tab-overview.jsx";
import TabReviews from "../tabs/tab-reviews/tab-reviews.jsx";
import TabDetails from "../tabs/tab-details/tab-details.jsx";
import {Namespace} from "./../../settings/settings.js";

class TabList extends PureComponent {
  constructor(props) {
    super(props);

    this._renderTab = this._renderTab.bind(this);
  }

  _renderTab(itemTab) {
    const {film, comments} = this.props;

    switch (itemTab) {
      case `Overview`:
        return <TabOverview film = {film}/>;
      case `Details`:
        return <TabDetails film = {film}/>;
      case `Reviews`:
        return <TabReviews comments = {comments}/>;
      default:
        return <p>Что-то пошло не так</p>;
    }
  }

  render() {
    const {itemTab, onSetActiveTab} = this.props;

    return (<div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${itemTab === `Overview` ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => onSetActiveTab(`Overview`)}>Overview</a>
          </li>
          <li className={`movie-nav__item ${itemTab === `Details` ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => onSetActiveTab(`Details`)}>Details</a>
          </li>
          <li className={`movie-nav__item ${itemTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => onSetActiveTab(`Reviews`)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {this._renderTab(itemTab)}
    </div>);
  }
}
const mapStateToProps = (state) => ({
  comments: state[Namespace.DATA].commentsToFilm,
});

TabList.propTypes = {
  film: PropTypes.shape({
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
  }),
  itemTab: PropTypes.string.isRequired,
  onSetActiveTab: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

export {TabList};
export default connect(mapStateToProps)(TabList);
