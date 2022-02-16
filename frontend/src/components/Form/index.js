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
      <select>
        Category
        <option value="pessoal">Pessoal</option>
        <option value="comida">Comida</option>
        <option value="escola">Escola</option>
        <option value="trabalho">Trabalho</option>
      </select>
    </Content>
  );
}

export default Form;
