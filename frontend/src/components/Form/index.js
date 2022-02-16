import { useState } from 'react';
import {
  Content,
} from './style';

function Form() {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   [name] = value;
  //   setTask(value)
  //   console.log(name, value)
  // };

  return (
    <Content>
      <input
        placeholder="Crie sua tarefa"
        name="task"
        value={ task }
        onChange={ ({ target: { value } }) => setTask(value) }
      />
      <select
        name="category"
        value={ category }
        onChange={ ({ target: { value } }) => setCategory(value) }>
        <option value="pessoal">Pessoal</option>
        <option value="comida">Comida</option>
        <option value="escola">Escola</option>
        <option value="trabalho">Trabalho</option>
        <option value="outro">Outro</option>
      </select>
    </Content>
  );
}

export default Form;
