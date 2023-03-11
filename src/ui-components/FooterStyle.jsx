import styled from 'styled-components';

const FooterStyled = styled.footer`
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
  background-color: ${({ variant }) => (variant ? variant : '#000000')};
  color: ${({ color }) => (color ? color : '#ffffff')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
  margin: ${(margin) => margin};
  position: fixed;
  left: 0;
  bottom: 0;
`;
const FooterStyle = ({
  children,
  justify,
  align,
  color,
  height,
  padding,
  margin,
  variant,
}) => {
  return (
    <FooterStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
      margin={margin}
      variant={variant}
    >
      {children}
    </FooterStyled>
  );
};

export default FooterStyle;
