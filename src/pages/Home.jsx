import './Home.css';

import { NavLink } from 'react-router-dom';

import Gallery from '../ui-components/Gallery';

const Home = () => {
  return (
    <div className="Home">
      <h1>Popular Titles</h1>
      <Gallery>
        <div>
          <NavLink to="/Series">
            <img
              src="https://res.cloudinary.com/dvdoak5et/image/upload/v1678641283/placeholder_ib9axy.png"
              alt="link to series"
            />
          </NavLink>
          <h3>Popular Series</h3>
        </div>
        <div className="Movies">
          <NavLink to="/Movies">
            <img
              src="https://res.cloudinary.com/dvdoak5et/image/upload/v1678641283/placeholder_ib9axy.png"
              alt="link to series"
            />
          </NavLink>
          <h3>Popular Movies</h3>
        </div>
      </Gallery>
    </div>
  );
};

export default Home;
