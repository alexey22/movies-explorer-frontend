export default function getFilteredMovies(movies, title, isShort) {
  return movies.filter(
    (movie) =>
      (!isShort || movie.duration < 40) &&
      (movie.nameRU.toLowerCase().includes(title.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(title.toLowerCase()))
  );
}
