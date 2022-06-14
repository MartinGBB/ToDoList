import { useState, useEffect, useContext } from 'react';
import fetchApi from "../../utils/fetch";
import { Table, Container, Icon } from "./style";
import detailsImg from "../../Images/details-btn.png";
import TaskDetails from '../../pages/TaskDetails';

import { MyContext } from '../Hooks/Context';

function TableTask() {
  const { taskDetails, setTaskDetails } = useContext(MyContext);

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFind = async () => {
    const route = "/";
    const method = "GET";
    const response = await fetchApi(route, method);
    setTasks(response);
    setIsLoading(false);
  };

  useEffect(() => {
    handleFind()
}, []);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Tarefa</th>
            <th>Categoria</th>
            <th>Status</th>
          </tr>
        </thead>
          {
            tasks.map(({ _id: id, task, category, status }) => (
              <tbody key={ id }>
              <tr>
                <td className="icon-button">
                  <button
                    type="button"
                    name="edit"
                    onClick={ () => setTaskDetails(id) }
                  >
                    <Icon src={ detailsImg } alt="details" />
                  </button>
                </td>
                <td>{ task }</td>
                <td>{ category }</td>
                <td>{ status }</td>

              </tr>
            </tbody>
            )).reverse()
          }
        </Table>
        { taskDetails && <TaskDetails /> }
    </Container>
  );
}

export default TableTask;
