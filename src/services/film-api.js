import axios from 'axios';

export const popularFilm = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=71440d8aca024081c5cc5f02da2f3d93`,
    )
    .then(res => res.data.results)
    .catch(console.error);
};

export const filmToId = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=71440d8aca024081c5cc5f02da2f3d93`,
    )
    .then(res => res.data)
    .catch(console.error);
};

export const imgFilm = ({ id, src }) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/images/${src}?api_key=71440d8aca024081c5cc5f02da2f3d93&language=en-US`,
    )
    .then(res => res.data)
    .catch(console.error);
};

export const actors = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=71440d8aca024081c5cc5f02da2f3d93&language=en-US`,
    )
    .then(res => res.data)
    .catch(console.error);
};

export const searchFilm = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=71440d8aca024081c5cc5f02da2f3d93&language=en-US&page=1&query=${query}`,
    )
    .then(res => res.data)
    .catch(console.error);
};
