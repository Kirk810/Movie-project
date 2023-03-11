import { useState } from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  & .hidden {
    display: none !important;
  }
  & .front {
    color: whitesmoke;
    position: relative;
    border: solid 1px white;
    border-radius: 10px;
    box-shadow: 0 0 15px;
    background-color: #466e85;
    width: 200px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
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
  & .imgmodalDiv {
    justify-content: flex-start;
    gap: 3rem;
  }
`;
const SeriesCard = ({ serie }) => {
  const [modal, setModal] = useState(false);

  return (
    <CardStyled>
      <div className="serie">
        <div className="front" key={serie.id}>
          <img src={serie.images['Poster Art'].url} alt={serie.title} />
          <h3>{serie.title}</h3>
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            Caracterisiticas
          </button>
        </div>

        <div className={modal ? 'modal' : 'hidden'}>
          <div className="modal-container">
            <h2>{serie.name}</h2>
            <h3>{serie.description}</h3>
            <h3>{serie.releaseYear}</h3>
            <img src={serie.images['Poster Art'].url} alt={serie.title} />
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

export default SeriesCard;
