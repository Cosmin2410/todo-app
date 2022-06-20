import React from 'react';
import { ItemsStyled } from './styles/Items.styled';

function Items({ counter, onClick }) {
  return (
    <ItemsStyled>
      <p>
        <span>{counter}</span>
        {counter === 1 ? ` Item Left` : ` Items Left`}
      </p>

      <button onClick={onClick}>Clear Completed</button>
    </ItemsStyled>
  );
}

export default Items;
