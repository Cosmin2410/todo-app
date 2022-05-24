import React from 'react';

function Form(props) {
  return (
    <div className="type">
      <input
        className="search"
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

      <button onClick={props.onClick} className="submit">
        Add Task
      </button>
    </div>
  );
}

export default Form;
