import React from 'react';

function Task(props) {
  // const loopData = () => {
  //   props.data.map(task => <   />)
  // }

  return (
    <div>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
            name="checkValue"
          />
          Task One
          <img src="./images/x.svg" alt="x" />
        </li>
      </ul>
    </div>
  );
}

export default Task;
