import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { userContext } from '../context/Context';
import HeaderStyle from '../ui-components/HeaderStyle';
import NavBar from '../ui-components/NavBar';

const Header = () => {
  const { user, logout } = useContext(userContext);
  return (
    <HeaderStyle color={'#FFFFFF'}>
      <h1>Demo streaming</h1>
      <NavBar>
        <li>{!user && <NavLink to="/login">Log in</NavLink>}</li>
        <li>{user && <NavLink to="/movies">Movies</NavLink>}</li>
        <li>{user && <NavLink to="/series">Series</NavLink>}</li>
        <li>{user && <button onClick={() => logout()}>Logout</button>}</li>
      </NavBar>
    </HeaderStyle>
  );
};

export default Header;
