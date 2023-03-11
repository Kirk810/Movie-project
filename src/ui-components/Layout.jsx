import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: 35vh 1fr 10vh;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
