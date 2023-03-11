import { useEffect, useState } from 'react';

import SeriesCard from '../ui-components/SeriesCard';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [filtedSerie, setFilteredSerie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true);
  let list = [];

  const getSeries = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setSeries(res.entries));

    setError(false);
    series.map((show) => show.programType.includes('filtedSerie') && list.push(show));
    const serieToPrint = list.filter((show) => show.releaseYear >= 2010);
    serieToPrint.splice(20);
    const copiedSeries = [...serieToPrint];
    const seriesSorted = copiedSeries.sort((a, b) => (a.title < b.title ? -1 : +1));
    setFilteredSerie(seriesSorted);
    setLoaded(true);
  };
  useEffect(() => {
    getSeries();
  }, [error]);

  return (
    <div>
      <h1>Series</h1>
      <div className="Series">
        {!loaded ? (
          <h2>Loading...</h2>
        ) : (
          filtedSerie.map((serie) => <SeriesCard serie={serie} key={serie.id} />)
        )}
        {error && <h2>Oops, something went wrong...</h2>}
      </div>
    </div>
  );
};

export default Series;
