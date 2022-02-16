import { useState } from 'react';
import {
  Content,
} from './style';

function Form() {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('otro');

  const handleSubmit = () => {
    console.log(task, category)
  };

  return (
    <Content>
      <input
        autoComplete="false"
        placeholder="Crie sua tarefa"
        name="task"
        value={ task }
        onChange={ ({ target: { value } }) => setTask(value) }
      />
      <select
        name="category"
        value={ category }
        onChange={ ({ target: { value } }) => setCategory(value) }>
        <option hidden defaultValue>Categoria</option>
        <option value="pessoal">Pessoal</option>
        <option value="comida">Comida</option>
        <option value="escola">Escola</option>
        <option value="trabalho">Trabalho</option>
        <option value="outro">Outro</option>
      </select>
      <button
        type="button"
        onClick={ handleSubmit }
      >
        Adicionar
      </button>
    </Content>
  );
}

export default Form;
