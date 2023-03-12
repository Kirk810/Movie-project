import { useEffect, useState } from 'react';

import Gallery from '../ui-components/Gallery';
import MovieCard from '../ui-components/MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filtedMovie, setFilteredMovie] = useState([]);
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
  };
  useEffect(() => {
    getMovies();
  }, [error]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <Gallery margin={'100px 80px'}>
        {filtedMovie.length ? (
          filtedMovie.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </Gallery>
    </div>
  );
};

export default Movies;
