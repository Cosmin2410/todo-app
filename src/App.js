import { useState, useEffect, useMemo } from 'react';
import Task from './Components/Task';
import Items from './Components/Items';
import Form from './Components/Form';
import { GlobalStyles } from './Components/styles/Global';
import { TodoApp } from './Components/styles/TodoApp.styled';
import { v4 as uuidv4 } from 'uuid';
import { ClearAll } from './Components/styles/Items.styled';

function App() {
  const [formData, setFormData] = useState({ text: '', check: false });

  const [inputValue, setInputValue] = useState(
    () => JSON.parse(localStorage.getItem('list')) || []
  );
  const [counter, setCounter] = useState(
    () => JSON.parse(localStorage.getItem('count')) || 0
  );

  // Local Storage

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(inputValue));
    localStorage.setItem('count', JSON.stringify(counter));
  }, [inputValue, counter]);

  // Input Value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        id: uuidv4(),
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

  const clearAll = () => {
    let removeAllTasks = inputValue.filter((rmvAll) => rmvAll.text === '');
    setInputValue(removeAllTasks);

    setCounter(0);
  };

  // const memo = useMemo(
  //   () => (
  //     [
  //       {
  //         title: {t('valid-photo-id')},
  //         description: {t('can-be-national-id')},
  //         inputType: {'id'},
  //       },
  //     ],
  //     [
  //       {
  //         title: {t('proof-of-address')},
  //         description: {t('can-be-utility-bill')},
  //         inputType: {'address'},
  //       },
  //     ],
  //     [
  //       {
  //         title: {t('proof-of-payment')},
  //         description: {t('front-back-copy-of-cc')},
  //         inputType: {'payment'},
  //         onChange: '',
  //       },
  //     ]
  //   )
  // );

  return (
    <TodoApp>
      <GlobalStyles />
      <h1>TO BUY</h1>
      <Form
        value={formData.text}
        onChange={handleChange}
        onClick={getDataBtn}
      />
      {inputValue.map((task) => (
        <Task
          key={task.id}
          task={task}
          checked={formData.checkValue}
          onClick={completeTask}
          onDelete={deleteTask}
        />
      ))}

      <Items counter={counter} onClick={clearCompleted} />

      <ClearAll onClick={clearAll}>
        <p>Clear All</p>
      </ClearAll>
    </TodoApp>
  );
}

export default App;
