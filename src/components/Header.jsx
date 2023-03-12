import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { userContext } from '../context/Context';
import Button from '../ui-components/Button';
import HeaderStyle from '../ui-components/HeaderStyle';
import NavBar from '../ui-components/NavBar';

const Header = () => {
  const { user, logout } = useContext(userContext);
  return (
    <HeaderStyle color={'#FFFFFF'}>
      <h1>Demo streaming</h1>
      <NavBar justify={'flex-end'}>
        <li>{!user && <NavLink to="/login">Log in</NavLink>}</li>
        <li>{user && <NavLink to="/movies">Movies</NavLink>}</li>
        <li>{user && <NavLink to="/series">Series</NavLink>}</li>
        <li>{user && <button onClick={() => logout()}>Logout</button>}</li>
        <Button>Start your free trial</Button>
      </NavBar>
    </HeaderStyle>
  );
};

export default Header;
