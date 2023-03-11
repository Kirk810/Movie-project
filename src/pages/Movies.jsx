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
    movies.map((show) => show.programType === 'movie' && list.push(show));
    const movieToPrint = list.filter((show) => show.releaseYear >= 2010);
    movieToPrint.splice(20);
    const copiedMovies = [...movieToPrint];
    const moviesSorted = copiedMovies.sort((a, b) => (a.title < b.title ? -1 : +1));
    setFilteredMovie(moviesSorted);
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
