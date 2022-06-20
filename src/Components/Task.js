import React from 'react';
import { TaskStyled } from './styles/Task.styled';
import { TaskDone } from './styles/Task.styled';
import { VscChromeClose, VscCheck } from 'react-icons/vsc';

function Task({ onClick, task, onDelete }) {
  return (
    <TaskStyled>
      <VscCheck onClick={() => onClick(task.id)} />

      <TaskDone
        check={task.check ? 'line-through' : 'none'}
        opacity={task.check ? '.3' : '1'}
      >
        {task.text}
      </TaskDone>

      <VscChromeClose onClick={() => onDelete(task.id)} />
    </TaskStyled>
  );
}

export default Task;
