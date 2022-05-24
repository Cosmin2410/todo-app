import { useState } from 'react';
import Task from './Components/Task';
import Items from './Components/Items';

function App() {
  const [formData, setFormData] = useState({ text: '', check: false });
  const [inputValue, setInputValue] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        id: Math.floor(Math.random() * 10000),
        [name]: value,
      };
    });
  };

  // Get Value From Input

  const getDataBtn = () => {
    setInputValue([...inputValue, formData]);

    setFormData((prevFormData) => {
      return { ...prevFormData, text: '' };
    });

    setCounter((prevCounter) => prevCounter + 1);
  };

  // Task Completed

  const completeTask = (id) => {
    const flipTask = inputValue.map((value) => {
      if (value.id === id) {
        return { ...value, check: !value.check };
      }
      return value;
    });
    setInputValue(flipTask);

    // Count Tasks when Pressing Check

    inputValue.map((task) => {
      if (task.id === id && task.check === true) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (task.id === id && task.check !== true) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    });
  };

  // Delete Task

  const deleteTask = (id) => {
    let deleteTasks = inputValue.filter((dltTask) => dltTask.id !== id);

    setInputValue(deleteTasks);

    // Substract Count Only When Checked Is Not Pressed
    inputValue.map((task) => {
      if (task.id === id && task.check === false) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    });
  };

  // Clear All Tasks Completed

  const clearCompleted = () => {
    const clearAllTasks = inputValue.filter(
      (clearAll) => clearAll.check === false
    );

    setInputValue(clearAllTasks);
  };

  return (
    <div>
      <input
        value={formData.text}
        name="text"
        type="text"
        onChange={handleChange}
      />
      <button onClick={getDataBtn}>Add Task</button>

      {inputValue.map((task) => (
        <Task
          key={Math.floor(Math.random() * 10000)}
          task={task}
          checked={formData.checkValue}
          onClick={completeTask}
          onDelete={deleteTask}
        />
      ))}
      {/* Tasks: {counter} */}
      <p>{counter === 1 ? `${counter} Item Left` : `${counter} Items Left`} </p>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
