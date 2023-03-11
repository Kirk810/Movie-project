import styled from 'styled-components';

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  background-color: ${({ color }) => (color ? color : 'none')};
  color: ${({ color }) => (color ? color : '#ffff')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => (position ? position : 'relative')};
`;
const NavBar = ({ children, height, justify, align, color, padding, position, gap }) => {
  return (
    <NavBarStyled
      justify={justify}
      align={align}
      height={height}
      color={color}
      padding={padding}
      position={position}
      gap={gap}
    >
      {children}
    </NavBarStyled>
  );
};

export default NavBar;
