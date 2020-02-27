import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMoreButton from "./show-more-button.jsx";

configure({adapter: new Adapter()});

it(`Click on button should pass to the callback`, () => {
  const onClickShowMoreHandle = jest.fn();
  const hidden = false;

  const showMoreButton = shallow(<ShowMoreButton
    isHidden={hidden}
    onClickShowMoreHandle={onClickShowMoreHandle}
  />);

  const button = showMoreButton.find(`.catalog__button`);
  button.simulate(`click`, {});

  expect(onClickShowMoreHandle).toHaveBeenCalledTimes(1);
});
