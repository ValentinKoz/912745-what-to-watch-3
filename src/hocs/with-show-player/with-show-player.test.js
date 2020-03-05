import React from "react";
import renderer from "react-test-renderer";
import {withShowPlayer} from "./with-show-player.js";

const MockComponent = () => <div></div>;
const MockComponentWrapped = withShowPlayer(MockComponent);

it(`withShowPlayer is renderer correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
