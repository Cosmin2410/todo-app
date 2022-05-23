import React from 'react';

function Task(props) {
  return (
    <li>
      <button
        className={props.task.check ? 'checked' : ''}
        onClick={() => props.onClick(props.task.id)}
      >
        Check
      </button>

      <p>{props.task.text}</p>
      <img src="./images/x.svg" alt="x" />
    </li>
  );
}

export default Task;
