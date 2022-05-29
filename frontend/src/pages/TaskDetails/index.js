import { useNavigate, useParams } from "react-router-dom";
import { Container } from './styles';

function TaskDetails() {
  let navigate = useNavigate();
  let { taskId } = useParams();
  
  const handleButton = ({ target: { name } }) => {
    if (name === 'return') return navigate(-1);
    
  }

  return (
    <Container>
      <h1>Details Task</h1>
      {console.log(taskId)}

      <div>
        <button
          type="button"
          name="return"
          onClick={ (event) => handleButton(event) }
        >
          return
        </button>

        <button
          type="button"
          name="remove"
          onClick={ (event) => handleButton(event) }
        >
          remove
        </button>

        <button
          type="button"
          name="save"
          onClick={ (event) => handleButton(event) }
        >
          save
        </button>
      </div>
    </Container>
  );
}

export default TaskDetails;
