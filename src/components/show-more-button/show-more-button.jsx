import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = React.memo((props) => {
  const {onClickShowMoreHandle, isHidden} = props;
  return (<div className="catalog__more" hidden={isHidden}>
    <button className="catalog__button" type="button" onClick={onClickShowMoreHandle}>Show more</button>
  </div>);
});

ShowMoreButton.displayName = `ShowMoreButton`;

ShowMoreButton.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  onClickShowMoreHandle: PropTypes.func.isRequired,
};

export default ShowMoreButton;
