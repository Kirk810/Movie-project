import { useEffect, useState } from 'react';

import Gallery from '../ui-components/Gallery';
import SeriesCard from '../ui-components/SeriesCard';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [filtedSerie, setFilteredSerie] = useState([]);
  const [error, setError] = useState(true);
  let list = [];

  const getSeries = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setSeries(res.entries));

    setError(false);
    series.map((serie) => serie.programType === 'series' && list.push(serie));
    const arraySeries = list.filter((serie) => serie.releaseYear >= 2010);
    arraySeries.splice(20);
    const copySeries = [...arraySeries];
    const sortSeries = copySeries.sort((a, b) => (a.title < b.title ? -1 : +1));
    setFilteredSerie(sortSeries);
  };
  useEffect(() => {
    getSeries();
  }, [error]);

  return (
    <div>
      <h1> Popular Series</h1>
      <Gallery margin={'100px 80px'}>
        {filtedSerie.length ? (
          filtedSerie.map((serie) => <SeriesCard serie={serie} key={serie.id} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </Gallery>
    </div>
  );
};

export default Series;
