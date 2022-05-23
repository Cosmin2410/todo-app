import { useState } from 'react';
import Task from './Components/Task';

function App() {
  const [formData, setFormData] = useState({ text: '', checkValue: false });
  const [inputValue, setInputValue] = useState(formData.text);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const getDataBtn = () => {};

  return (
    <div>
      <input
        value={formData.text}
        name="text"
        type="text"
        onChange={handleChange}
      />
      <button onClick={getDataBtn}>Add Task</button>

      <Task checked={formData.checkValue} onChange={handleChange} />
    </div>
  );
}

export default App;
