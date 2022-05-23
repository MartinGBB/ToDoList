import { useState, useEffect } from 'react';
import fetchApi from "../../utils/fetch";
import { Table, Container } from './style';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleFind = async () => {
    const route = "/";
    const method = "GET";
    const response = await fetchApi(route, method);
    setTasks(response);
    setIsLoading(false);
  };
  
  console.log(taskId)
  const handleDelete = async () => {
    const route = `/${taskId}`;
    const method = "DELETE";
    return fetchApi(route, method);
  }

  // const handleEdit = async (id, data) => {
  //   console.log(id, data)
  //   // const route = `/${id}`;
  //   // const method = "PUT";
  //   // return fetchApi(route, method, data);
  // }

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
            tasks.map(({ _id, task, category, status }) => (
              <tbody key={ _id }>
              <tr>
                <td>
                <input
                    type="checkbox"
                    value={ _id }
                    name={ task }
                    onChange={ () => setTaskId(_id) }
                  />
                </td>
                <td>{ task }</td>
                <td>{ category }</td>
                <td>{ status }</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => handleDelete() }
                  >
                    eliminar
                  </button>


                </td>
              </tr>
            </tbody>
            ))
          }
        </Table>
    </Container>
  );
}

export default TaskList;
