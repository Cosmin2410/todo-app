import styled from 'styled-components';

export const TaskStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const CheckImg = styled.img`
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(55%) sepia(67%) saturate(5195%)
    hue-rotate(206deg) brightness(96%) contrast(108%);
`;

export const DeleteImg = styled.img`
  cursor: pointer;
  width: 2.5rem;
  filter: brightness(0) saturate(100%) invert(55%) sepia(67%) saturate(5195%)
    hue-rotate(206deg) brightness(96%) contrast(108%);
`;
