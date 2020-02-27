import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onClickShowMoreHandle, isHidden} = props;
  return (<div className="catalog__more" hidden={isHidden}>
    <button className="catalog__button" type="button" onClick={onClickShowMoreHandle}>Show more</button>
  </div>);
};

ShowMoreButton.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  onClickShowMoreHandle: PropTypes.func.isRequired,
};

export default ShowMoreButton;
