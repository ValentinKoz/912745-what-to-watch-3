import React, {PureComponent} from "react";

export const withRating = (Componet) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        textComment: ``,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(evt) {
      this.setState({textComment: evt.target.value});
    }

    handleChange(evt) {
      this.setState({rating: +evt.target.value});
    }
    render() {
      const {rating, textComment} = this.state;

      return (
        <Componet
          {...this.props}
          textComment={textComment}
          rating={rating}
          onChangeText={this.handleChangeText}
          onChangeRating={this.handleChange}
        />
      );
    }
  }
  return WithRating;
};
