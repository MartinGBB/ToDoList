// import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Container, ReturnBtn, Button } from './styles';
import fetchApi from "../../utils/fetch";

function TaskDetails({ taskId }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState('Otro');
  const [status, setStatus] = useState('Pendente');
  
  // let navigate = useNavigate();
  // let { taskId } = useParams();

  const handleDelete = async (id) => {
    const route = `/${id}`;
    const method = "DELETE";
    fetchApi(route, method);
    // navigate(-1);
  };

    const handleEdit = async (id, data) => {
    const route = `/${id}`;
    const method = "PUT";
    fetchApi(route, method, data);
    // navigate(-1);
  }

  const handleButton = ({ target: { name } }) => {
    // if (name === 'return') return navigate(-1);
    if (name === 'remove') return handleDelete(taskId);
    if (name === 'save') return handleEdit(taskId, { task, category, status })
  }

  return (
    <Container>
      <ReturnBtn
        type="button"
        name="return"
        onClick={ (event) => handleButton(event) }
        >
        return
      </ReturnBtn>

      <h1>Details Task</h1>

      <input
        name="task"
        placeholder="task"
        value={ task }
        type="text"
        onChange={ ({ target: { value } }) => setTask(value) }
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

      <select
        name="status"
        value={ status }
        onChange={ ({ target: { value } }) => setStatus(value) }
      >
        <option hidden defaultValue>Status</option>
        <option value="pending">Pendente</option>
        <option value="process">Em andamento</option>
        <option value="resolved">Culminada</option>
      </select>

      <div>
        <Button
          type="button"
          name="remove"
          onClick={ (event) => handleButton(event) }
        >
          remove
        </Button>

        <Button
          type="button"
          name="save"
          onClick={ (event) => handleButton(event) }
        >
          save
        </Button>
      </div>
    </Container>
  );
}

export default TaskDetails;
