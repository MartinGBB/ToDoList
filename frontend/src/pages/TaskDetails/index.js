import {
  Container,
} from './styles';

function TaskDetails(id) {
  return (
    <Container>
      <h1>Edit { id }</h1>
      {console.log('estou vivo')}
    </Container>
  );
}

export default TaskDetails;
