import Form from '../components/Form';
import TaskList from '../components/TaskList';
import {
  Container,
} from './style';

function ToDoList() {
  return (
    <Container>
      <Form />
      <TaskList />
    </Container>
  );
}

export default ToDoList;
