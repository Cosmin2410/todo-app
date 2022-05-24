import React from 'react';

function Task(props) {
  return (
    <li>
      <button onClick={() => props.onClick(props.task.id)}>Check</button>

      <p className={props.task.check ? 'checked' : ''}>{props.task.text}</p>

      <img
        src="./images/x.svg"
        alt="x"
        onClick={() => props.onDelete(props.task.id)}
        // onKeyDown={e => e.key === 'Enter' && }
      />
    </li>
  );
}

export default Task;
