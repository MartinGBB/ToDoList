import { useNavigate, useParams } from "react-router-dom";
import { Container } from './styles';

const handleButton = ({ target: { name } }) => {
  console.log(`clicou: ${name}`)
}

function TaskDetails() {
  let { taskId } = useParams();
  let navigate = useNavigate();
  return (
    <Container>
      <h1>Details Task</h1>
      {console.log(taskId)}

      <div>
        <button
          type="button"
          name="cancelar"
          onClick={ (event) => handleButton(event) }
        >
          cancelar
        </button>
        <button
          type="button"
          name="aceptar"
          onClick={ (event) => handleButton(event) }
        >
          aceptar
        </button>
      </div>
    </Container>
  );
}

export default TaskDetails;
