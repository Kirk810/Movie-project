import styled from 'styled-components';

const StyledGallery = styled.div`
  background-color: ${({ background }) => background};
  background-image: ${({ image }) => image};
  color: #000000;
  display: flex;
  display: grid;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
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
  width: 100vw;
  height: ${({ homeheight }) => homeheight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Gallery = ({
  background,
  margin,
  gap,
  children,
  homeheight,
  direction,
  justify,
  align,
  image,
  padding,
}) => {
  return (
    <StyledGallery
      background={background}
      direction={direction}
      justify={justify}
      align={align}
      homeheight={homeheight}
      image={image}
      gap={gap}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledGallery>
  );
};
export default Gallery;
