import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

  }
  handleSubmit(evt) {
    const {textComment, rating, postComment, film} = this.props;
    evt.preventDefault();

    postComment({
      id: film.id,
      comment: textComment,
      rating,
    });
  }

  isAvalible() {
    const {rating, textComment} = this.props;
    if (rating !== `0` && textComment.length >= 50 && textComment.length <= 400) {
      return true;
    }
    return false;
  }

  render() {
    const {film, rating, onChangeRating, onChangeText, textComment} = this.props;
    const {poster, name, backgroundImg, backgroundColor} = film;

    return (
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImg} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="/" className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="../img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={(evt) => (this.handleSubmit(evt))}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" onChange={onChangeRating} id="star-1" type="radio" name="rating" value="1" checked={rating === 1 ? `checked` : ``} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" onChange={onChangeRating} id="star-2" type="radio" name="rating" value="2" checked={rating === 2 ? `checked` : ``} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" onChange={onChangeRating} id="star-3" type="radio" name="rating" value="3" checked={rating === 3 ? `checked` : ``}/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" onChange={onChangeRating} id="star-4" type="radio" name="rating" value="4" checked={rating === 4 ? `checked` : ``}/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" onChange={onChangeRating} id="star-5" type="radio" name="rating" value="5" checked={rating === 5 ? `checked` : ``}/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea maxLength="400" onChange={onChangeText} value={textComment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" disabled={this.isAvalible() ? `` : `disabled`} type="submit">Post</button>
              </div>
            </div>

          </form>
        </div>

      </section>);
  }
}
AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  textComment: PropTypes.string,
  postComment: PropTypes.func.isRequired,
};

export default AddReview;
