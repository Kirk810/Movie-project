import { NavLink } from 'react-router-dom';

import FooterStyle from '../ui-components/FooterStyle';

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <NavLink to="/">Home</NavLink>

        <a>| Terms and conditions</a>

        <a>| Privacy policy</a>

        <a>| Collection Statement</a>

        <a>| Help</a>

        <a>| Manage Account</a>
      </ul>

      <p>Copyright 2016 DEMO Streaming All Rigths Reserved.</p>
    </FooterStyle>
  );
};

export default Footer;
