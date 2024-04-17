import movieData from "../components/loadData";

const getMovieById = (id) => {
  // Find the movie in the movie data array
  return movieData.find((movie) => movie.id === id);
};
export default getMovieById;
