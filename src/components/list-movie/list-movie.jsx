import React from "react";
import {connect} from "react-redux";
import {Operation as Data} from "./../../reducer/data/data.js";
import PropTypes from "prop-types";
import CardMovie from "../card-movie/card-movie.jsx";

const ListMovie = React.memo((props) => {
  const {films, onCardClickHandle, onSetActiveItem, activeItem, onLoadComments} = props;
  return (<div className="catalog__movies-list">{
    films.map((film, i) => <CardMovie activeCard={activeItem} handleEventHover={
      () => onSetActiveItem(film)} handleEventHoverOut={() => onSetActiveItem(null)} key={`${i}-${film.name}`} film={film} onCardClickHandle={
      () => {
        onCardClickHandle(film);
        onLoadComments(film.id);
      }} />)} </div>);
});

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
  onLoadComments: (id) => dispatch(Data.loadComments(id)),
});

ListMovie.displayName = `ListMovie`;

ListMovie.propTypes = {
  activeItem: PropTypes.object,
  films: PropTypes.array.isRequired,
  onCardClickHandle: PropTypes.func.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
};

export {ListMovie};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
