import React from 'react';
import { FromStyled } from './styles/From..styled';

function Form(props) {
  return (
    <FromStyled>
      <input
        value={props.value}
        name="text"
        type="text"
        onChange={props.onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.onClick();
          }
        }}
      />

      <button onClick={props.onClick}>Add Task</button>
    </FromStyled>
  );
}

export default Form;
