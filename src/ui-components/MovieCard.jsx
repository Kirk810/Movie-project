import { useState } from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  & .hidden {
    display: none !important;
  }
  & .front {
    position: relative;
    border: solid 1px white;
    border-radius: 10px;
    box-shadow: 0 0 15px;
    width: 200px;
    color: #000000;
    :hover {
      box-shadow: 0 0 15px 0 white;
      transition: all 0.3s ease-in-out;
    }
  }
  & .front > img {
    height: 250px;
    position: relative;
    left: 25px;
  }
  & .front > h3 {
    display: flex;
    justify-content: center;
  }
  & .front > button {
    position: relative;
    left: 55px;
    border-radius: 5px;
  }
  & .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  & .modal-container {
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 2rem;
    gap: 2rem;
    border-radius: 10px;
    border: 2px solid #163435;
    background-size: cover;
    background-position: center;
    background-color: #0000008d;
  }
  & .modal-container > button {
    width: 50px;
  }

  & .modal-container > img {
    height: 250px;
  }
  & .divmodalflex {
    color: whitesmoke;
    display: flex;
    padding: 0.6rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #000000dd;
    border: 2px solid #33d6c9;
    border-radius: 5px;
  }
`;
const MovieCard = ({ movie }) => {
  const [modal, setModal] = useState(false);

  return (
    <CardStyled>
      <div className="movie">
        <div className="front" key={movie.id}>
          <img src={movie.images['Poster Art'].url} alt={movie.title} />
          <h3>{movie.title}</h3>
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            Attributes
          </button>
        </div>

        <div className={modal ? 'modal' : 'hidden'}>
          <div className="modal-container">
            <h2>{movie.name}</h2>
            <h3>{movie.description}</h3>
            <h3>{movie.releaseYear}</h3>
            <img src={movie.images['Poster Art'].url} alt={movie.title} />
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default MovieCard;
