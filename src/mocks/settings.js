const genres = [`All genres`, `Adventure`, `Action`, `Comdey`, `Dramas`];

const DISPLAYED_ITEMS = 8;

const ADD_TO_SHOW = 8;

export {genres, ADD_TO_SHOW, DISPLAYED_ITEMS};

export const adaptedObject = (item) => {
  return {
    id: `${item.id}`,
    name: item.name,
    poster: item.poster_image,
    preview: item.preview_image,
    backgroundImg: item.background_image,
    backgroundColor: item.background_color,
    video: item.video_link,
    previewVideo: item.preview_video_link,
    description: item.description,
    rating: item.rating,
    scoresCount: item.scores_count,
    director: item.director,
    starring: item.starring,
    runTime: item.run_time,
    genre: item.genre,
    released: item.released,
    isFavorite: item.is_favorite
  };
};
