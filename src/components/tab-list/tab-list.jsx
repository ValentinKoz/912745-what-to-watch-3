import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import TabOverview from "../tabs/tab-overview/tab-overview.jsx";
import TabReviews from "../tabs/tab-reviews/tab-reviews.jsx";
import TabDetails from "../tabs/tab-details/tab-details.jsx";

class TabList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemActive: `Overview`,
    };

    this.handleSetActiveItem = this.handleSetActiveItem.bind(this);
    this._renderTab = this._renderTab.bind(this);
  }

  _renderTab(itemActive) {
    const {film} = this.props;
    switch (itemActive) {
      case `Overview`:
        return <TabOverview film = {film}/>;
      case `Details`:
        return <TabDetails film = {film}/>;
      case `Reviews`:
        return <TabReviews film = {film}/>;
      default:
        return <p>Что-то пошло не так</p>;
    }
  }

  handleSetActiveItem(item) {
    this.setState({itemActive: item});
  }

  render() {
    return (<div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${this.state.itemActive === `Overview` ? `movie-nav__item--active` : ``}`}>
            <a href="#" onClick={() => this.handleSetActiveItem(`Overview`)} className="movie-nav__link" >Overview</a>
          </li>
          <li className={`movie-nav__item ${this.state.itemActive === `Details` ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => this.handleSetActiveItem(`Details`)}>Details</a>
          </li>
          <li className={`movie-nav__item ${this.state.itemActive === `Reviews` ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => this.handleSetActiveItem(`Reviews`)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {this._renderTab(this.state.itemActive)}
    </div>);
  }
}

TabList.propTypes = {
  film: PropTypes.object.isRequired,
};

export default TabList;
