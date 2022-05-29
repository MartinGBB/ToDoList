import { useNavigate, useParams } from "react-router-dom";
import { Container } from './styles';
import fetchApi from "../../utils/fetch";

function TaskDetails() {
  let navigate = useNavigate();
  let { taskId } = useParams();

  const handleDelete = async (id) => {
    const route = `/${id}`;
    const method = "DELETE";
    fetchApi(route, method);
    navigate(-1);
  };

  
  const handleButton = ({ target: { name } }) => {
    if (name === 'return') return navigate(-1);
    if (name === 'remove') return handleDelete(taskId);
    
  }

  return (
    <Container>
      <h1>Details Task</h1>
      {console.log(taskId)}

        <button
          type="button"
          name="return"
          onClick={ (event) => handleButton(event) }
          >
          return
        </button>

      <div>
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
