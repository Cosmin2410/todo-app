import styled from 'styled-components';

export const FromStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    all: unset;
    background-color: hsl(235, 24%, 19%);
    height: 2.5rem;
    border-radius: 3px;
    padding: 0px 5px;
    width: 18rem;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 1.5rem;
  }

  button {
    height: 2.8rem;
    width: 9.6rem;
    background-color: hsl(235, 24%, 19%);
    border: none;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: hsl(220, 98%, 61%);
  }
`;
