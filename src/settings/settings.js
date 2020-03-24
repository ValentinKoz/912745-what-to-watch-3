const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const Path = {
  LOGIN: `/login`,
  FILMS: `/films`,
  MY_LIST: `/myList`,
  MAIN: `/`,
  REVIEW: `/review`,
  PLAYER: `/player`,
  PROMO: `/promo`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

const Namespace = {DATA: `DATA`, STATE: `STATE`, USER: `USER`};

const DISPLAYED_ITEMS = 8;

const ADD_TO_SHOW = 8;

export {MONTHS, ADD_TO_SHOW, DISPLAYED_ITEMS, Namespace, Path};

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

export const adaptedAuth = (item) => {
  return {
    id: `${item.id}`,
    email: item.email,
    name: item.name,
    avatarUrl: item[`avatar_url`],
  };
};

export const getDate = (propDate) => {
  const date = new Date(propDate);
  const month = MONTHS[date.getMonth()];
  const days = date.getDay();
  const year = date.getFullYear();
  return `${month} ${days}, ${year}`;
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Vary good`;
  } else if (rating === 10) {
    return `Awesome`;
  }
  return ``;
};
