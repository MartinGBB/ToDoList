import { useContext } from 'react';
import fetchApi from '../../utils/fetch';
import { MyContext } from '../Hooks/Context';
import {
  Content,
} from './style';

function Form() {
  const {
    task,
    setTask,
    category,
    setCategory,
  } = useContext(MyContext);

  const handleSubmit = async () => {
    const data = { task, category, status: 'pending' };
    const route = "/";
    const method = "POST";
    const request = await fetchApi(route, method, data);
    setTask('')
    return request;
  };

  return (
    <Content>
      <input
        placeholder="Crie sua tarefa"
        name="task"
        value={ task }
        autoComplete="off"
        onChange={ ( { target: { value } }) => setTask(value) }
      />
      <select
        name="category"
        value={ category }
        onChange={ ({ target: { value } }) => setCategory(value) }
      >
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
