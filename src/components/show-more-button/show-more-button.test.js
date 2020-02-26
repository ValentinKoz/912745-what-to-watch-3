import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

it(`Render button correctly`, () => {
  const tree = renderer
    .create(
      <ShowMoreButton
        isHidden={false}
        onClickShowMoreHandle={() => {}}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
