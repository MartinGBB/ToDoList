import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
} from './styles';

// const handleButton = () => {
  
// }

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
          onClick={ () => navigate(-1) }
        >
          cancelar
        </button>
        <button
          type="button"
          name="aceptar"
        >
          aceptar
        </button>
      </div>
    </Container>
  );
}

export default TaskDetails;
