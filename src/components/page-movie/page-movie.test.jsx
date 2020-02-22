import React from "react";
import renderer from "react-test-renderer";
import PageMovie from "./page-movie.jsx";

const film = {
  genre: `Genre`,
  title: `Title Name`,
  releaseDate: 2020,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPoster: `img/pulp-fiction.jpg`,
  ratingScore: `0,0`,
  ratingLevel: `so so`,
  ratingCount: 0,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ipsum at tellus vestibulum feugiat eu nec lectus. Nunc sollicitudin nisi quis turpis molestie, a porta eros mollis. Curabitur sodales vel mi ac suscipit. Maecenas dignissim nisl non nibh bibendum semper. Suspendisse posuere nisi id arcu rhoncus commodo. Donec posuere vitae ante ac fringilla. Donec et velit metus.`,
  director: `Mario`,
  starring: `A , B, C and other`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`PageMovie is renderer correctly`, () => {
  const tree = renderer.create(
      <PageMovie film={film} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
