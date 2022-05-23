import Form from '../../components/Form';
import TaskList from '../../components/TaskList';
import {
  Container,
} from './styles';

function ToDoList() {
  return (
    <Container>
      <Form />
      <TaskList />
    </Container>
  );
}

export default ToDoList;
