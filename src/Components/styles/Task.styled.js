import styled from 'styled-components';

export const TaskStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.308);
  width: 18rem;
  padding: 1rem;
  background-color: hsl(235, 24%, 19%);

  svg {
    font-size: 2rem;
    color: hsl(220, 98%, 61%);
    cursor: pointer;
  }
`;

export const TaskDone = styled.p`
  font-size: 1.3rem;
  text-decoration: ${({ check }) => check};
  opacity: ${({ opacity }) => opacity};
  width: 8rem;
  word-wrap: break-word;
  text-align: center;
`;
