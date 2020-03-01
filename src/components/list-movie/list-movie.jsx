import React from "react";
import PropTypes from "prop-types";
import CardMovie from "../card-movie/card-movie.jsx";

const ListMovie = React.memo((props) => {
  const {films, onCardClickHandle, onSetActiveItem, activeItem} = props;
  return (<div className="catalog__movies-list">{
    films.map((film, i) => <CardMovie activeCard={activeItem} handleEventHover={
      () => onSetActiveItem(film)} handleEventHoverOut={() => onSetActiveItem(null)} key={`${i}-${film.title}`} film={film} onCardClickHandle={
      () => onCardClickHandle(film)} />)} </div>);
});

ListMovie.displayName = `ListMovie`;

ListMovie.propTypes = {
  activeItem: PropTypes.object,
  films: PropTypes.array.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
};

export default ListMovie;
