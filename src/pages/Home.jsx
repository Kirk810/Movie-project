import { Link } from 'react-router-dom';

import buttonImage from '../../public/utils/placeholder.png';
import Button from '../ui-components/Button';

const Home = () => {
  return (
    <div className="Home">
      <h1>Popular Titles</h1>
      <Link to="/Series">
        <Button>
          <img src={buttonImage} alt="placeholder" />
          Series
        </Button>
      </Link>
      <h3>Popular Series</h3>
      <Link to="/Movies">
        <Button>Movies</Button>
      </Link>
      <h3>Popular movies</h3>
    </div>
  );
};

export default Home;
