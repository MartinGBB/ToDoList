import { useNavigate } from "react-router-dom";
import {
  Container,
} from './styles';

// const handleButton = () => {
  
// }

function TaskDetails() {
  let navigate = useNavigate();
  return (
    <Container>
      <h1>Details Task</h1>
      {console.log('Hello World')}

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
