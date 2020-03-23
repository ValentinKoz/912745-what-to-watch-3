import React from "react";
import {connect} from "react-redux";
import {Operation as Data} from "./../../reducer/data/data.js";
import PropTypes from "prop-types";
import CardMovie from "../card-movie/card-movie.jsx";

const ListMovie = React.memo((props) => {
  const {films, onCardClickHandle, onSetActiveId, activeId, onLoadComments} = props;

  return (<div className="catalog__movies-list">{
    films.map((film, i) => <CardMovie activeId={activeId} onEventHover={
      () => onSetActiveId(film.id)} onEventHoverOut={() => onSetActiveId(null)} key={`${i}-${film.name}`} film={film} onCardClickHandle={
      () => {
        onCardClickHandle(film.id);
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
  activeId: PropTypes.string,
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
  onCardClickHandle: PropTypes.func.isRequired,
  onSetActiveId: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
};

export {ListMovie};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
