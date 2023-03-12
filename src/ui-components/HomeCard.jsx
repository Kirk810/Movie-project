import styled from 'styled-components';

const CardStyled = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding: ${({ padding }) => padding};
  background-color: ${({ back }) => (back ? back : 'black')};
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: 200px;
  gap: 10px;
`;

const HomeCard = ({
  position,
  ph,
  type,
  onChange,
  value,
  color,
  back,
  letter,
  width,
  inputMode,
}) => {
  return (
    <CardStyled
      width={width}
      placeholder={ph}
      type={type}
      onChange={onChange}
      value={value}
      color={color}
      variant={back}
      letter={letter}
      position={position}
      inputMode={inputMode}
    />
  );
};

export default HomeCard;
