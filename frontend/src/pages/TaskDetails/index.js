import { useNavigate, useParams } from "react-router-dom";
import { Container } from './styles';

function TaskDetails() {
  let navigate = useNavigate();
  let { taskId } = useParams();
  
  const handleButton = ({ target: { name } }) => {
    if (name === 'cancelar') return navigate(-1)
    console.log(`clicou: ${name}`)
  }

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
