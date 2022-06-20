import styled from 'styled-components';

export const ItemsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.623);
  width: 18rem;
  background-color: hsl(235, 24%, 19%);
  border-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  span {
    color: hsl(220, 98%, 61%);
    font-size: 1.1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.623);
  }

  button:hover {
    color: hsl(220, 98%, 61%);
  }
`;
