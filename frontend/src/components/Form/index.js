import { useState } from 'react';
import fetchApi from '../../utils/fetch';
import {
  Content,
} from './style';

function Form() {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('otro');

  const handleSubmit = async () => {
    const data = JSON.stringify({ task, category });
    const route = "/";
    const method = "POST";
    const request = await fetchApi(data, route, method);
    console.log(request)
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
