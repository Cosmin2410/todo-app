import React from 'react';
import Delete from '../images/x.svg';
import Check from '../images/check.svg';
import { TaskStyled } from './styles/Task.styled';
import { TaskDone } from './styles/Task.styled';
import { DeleteImg } from './styles/Task.styled';
import { CheckImg } from './styles/Task.styled';

function Task({ onClick, task, onDelete }) {
  return (
    <TaskStyled>
      <CheckImg src={Check} alt="check" onClick={() => onClick(task.id)} />

      <TaskDone
        check={task.check ? 'line-through' : 'none'}
        opacity={task.check ? '.3' : '1'}
      >
        {task.text}
      </TaskDone>

      <DeleteImg src={Delete} alt="x" onClick={() => onDelete(task.id)} />
    </TaskStyled>
  );
}

export default Task;
