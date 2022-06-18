// import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Container, ReturnBtn, ContainerBtn } from './styles';
import closeImg from "../../Images/close-btn.png";
import fetchApi from "../../utils/fetch";
import { MyContext } from '../../components/Hooks/Context';

function TaskDetails() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState('Otro');
  const [status, setStatus] = useState('Pendente');
  
  const {
    taskDetails,
    setTaskDetails,
  //   task,
  //   setTask,
  //   category,
  //   setCategory,
  } = useContext(MyContext);
  
  const handleDelete = async (id) => {
    const route = `/${id}`;
    const method = "DELETE";
    fetchApi(route, method);
    setTaskDetails(undefined);
  };

  const handleEdit = async (id, data) => {
    const route = `/${id}`;
    const method = "PUT";
    fetchApi(route, method, data);
    setTaskDetails(undefined);
  }
  
  const handleButton = ({ target: { name } }) => {
    if (name === 'return') return setTaskDetails(undefined);
    if (name === 'remove') return handleDelete(taskDetails);
    if (name === 'save') return handleEdit(taskDetails, { task, category, status });
  }
  
  return (
    <Container>
      <ReturnBtn
        type="button"
        name="return"
        onClick={ (event) => handleButton(event) }
        >
        <img src={ closeImg } alt="close" />
      </ReturnBtn>
      <h3>Details Task</h3>

      <input
        name="task"
        placeholder={ taskDetails }
        value={ task }
        autoComplete="off"
        type="text"
        onChange={ ({ target: { value } }) => setTask(value) }
      />

      <select
        name="category" 
        className="selectCategory"
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
        className="selectStatus"
        value={ status }
        onChange={ ({ target: { value } }) => setStatus(value) }
      >
        <option hidden defaultValue>Status</option>
        <option value="pending">Pendente</option>
        <option value="process">Em andamento</option>
        <option value="resolved">Culminada</option>
      </select>

      <ContainerBtn>
      <button
          type="button"
          name="save"
          onClick={ (event) => handleButton(event) }
        >
          save
        </button>

        <button
          type="button"
          name="remove"
          onClick={ (event) => handleButton(event) }
        >
          remove
        </button>
      </ContainerBtn>
    </Container>
  );
}

export default TaskDetails;
