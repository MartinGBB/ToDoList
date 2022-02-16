import { useState } from 'react';
import {
  Content,
} from './style';

function Form() {
  const [task, setTask] = useState('');

  const handleChange = ({ target: { value } }) => {
    setTask(value)
    console.log(value)
  };

  return (
    <Content>
      <input
        placeholder="Crie sua tarefa"
        name="task"
        value={ task }
        onChange={ (event) => handleChange(event) }
      />
    </Content>
  );
}

export default Form;
