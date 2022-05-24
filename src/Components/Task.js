import React from 'react';

function Task(props) {
  return (
    <li>
      <img
        src="./images/check.svg"
        alt="check"
        onClick={() => props.onClick(props.task.id)}
        className="check"
      />

      <p className={props.task.check ? 'checked text-list' : 'text-list'}>
        {props.task.text}
      </p>

      <img
        className="delete"
        src="./images/x.svg"
        alt="x"
        onClick={() => props.onDelete(props.task.id)}
      />
    </li>
  );
}

export default Task;
