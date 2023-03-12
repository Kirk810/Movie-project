import { useEffect, useState } from 'react';

import MovieCard from '../ui-components/MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filtedMovie, setFilteredMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true);
  let list = [];

  const getMovies = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.entries));

    setError(false);
    movies.map((movie) => movie.programType === 'movie' && list.push(movie));
    const arrayMovies = list.filter((movie) => movie.releaseYear >= 2010);
    const copyMovies = [...arrayMovies];
    const sortMovies = copyMovies.sort((a, b) => (a.title < b.title ? -1 : +1));
    setFilteredMovie(sortMovies);
    setLoaded(true);
  };
  useEffect(() => {
    getMovies();
  }, [error]);

  return (
    <div>
      <h1>Movies</h1>
      <div className="Movies">
        {!loaded ? (
          <h2>Loading...</h2>
        ) : (
          filtedMovie.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        )}
        {error && <h2>Oops, something went wrong...</h2>}
      </div>
    </div>
  );
};

export default Movies;
