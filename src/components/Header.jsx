import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { userContext } from '../context/Context';

const Header = () => {
  const { user, logout } = useContext(userContext);
  return (
    <header className="Header">
      <h1>Demo streaming</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{!user && <NavLink to="/login">Log in</NavLink>}</li>
        <li>{user && <NavLink to="/movies">Movies</NavLink>}</li>
        <li>{user && <NavLink to="/series">Series</NavLink>}</li>
        <li>{user && <button onClick={() => logout()}>Logout</button>}</li>
      </nav>
    </header>
  );
};

export default Header;
