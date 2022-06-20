import React from 'react';
import Delete from '../images/x.svg';
import Check from '../images/check.svg';
import { TaskStyled } from './styles/Task.styled';
import { TaskDone } from './styles/Task.styled';

function Task({ onClick, task, onDelete }) {
  return (
    <TaskStyled>
      <img
        src={Check}
        alt="check"
        onClick={() => onClick(task.id)}
        className="check"
      />

      <TaskDone
        check={task.check ? 'line-through' : 'none'}
        opacity={task.check ? '.3' : '1'}
      >
        {task.text}
      </TaskDone>

      <img
        className="delete"
        src={Delete}
        alt="x"
        onClick={() => onDelete(task.id)}
      />
    </TaskStyled>
  );
}

export default Task;
