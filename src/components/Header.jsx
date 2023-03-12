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
      <NavBar justify={'flex-end'} gap={'5px'}>
        <a>{!user && <NavLink to="/login">Log in</NavLink>}</a>
        <a>{user && <NavLink to="/movies">Movies</NavLink>}</a>
        <a>{user && <NavLink to="/series">Series</NavLink>}</a>
        <a>{user && <button onClick={() => logout()}>Logout</button>}</a>
        <button>Start your free trial</button>
      </NavBar>
    </HeaderStyle>
  );
};

export default Header;
