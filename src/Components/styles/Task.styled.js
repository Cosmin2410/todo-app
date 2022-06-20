import styled from 'styled-components';

export const TaskStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.308);
  width: 18rem;
  padding: 0px 5px;
  background-color: hsl(235, 24%, 19%);
`;

export const TaskDone = styled.p`
  font-size: 1.3rem;
  text-decoration: ${({ check }) => check};
  opacity: ${({ opacity }) => opacity};
`;
