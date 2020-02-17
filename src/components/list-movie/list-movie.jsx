import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardMovie from "../card-movie/card-movie.jsx";

class ListMovie extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(film) {
    this.setState({activeCard: film});
  }

  render() {
    const {films, onCardClickHandle} = this.props;
    return (<div className="catalog__movies-list">{
      films.map((film, i) => <CardMovie handleEventHover={
        () => this.handleHover(film)} key={`${i}-${film.title}`} film={film} onCardClickHandle={
        () => (onCardClickHandle(film))} />)} </div>);
  }
}

ListMovie.propTypes = {
  films: PropTypes.array.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
};

export default ListMovie;
