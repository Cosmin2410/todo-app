import { useState } from 'react';
import Task from './Components/Task';

function App() {
  const [formData, setFormData] = useState({ text: '', check: false });
  const [inputValue, setInputValue] = useState([]);

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

  const getDataBtn = () => {
    setInputValue([...inputValue, formData]);

    setFormData((prevFormData) => {
      return { ...prevFormData, text: '' };
    });
  };

  const completeTask = (id) => {
    let flipCheck = inputValue.map((flip) => {
      if (inputValue.id === id) {
        return { ...flip, check: !flip.check };
      }
      return flip;
    });
    setInputValue(flipCheck);

    console.log('checked', id);
  };
  console.log(inputValue);

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
        />
      ))}

      {/* 
      <Task
        checked={formData.checkValue}
        onChange={handleChange}
        loopData={inputValue}
      /> */}
    </div>
  );
}

export default App;
