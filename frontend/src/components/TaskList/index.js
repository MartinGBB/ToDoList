import { useState, useEffect } from 'react';
import fetchApi from "../../utils/fetch";
import { Table } from './style';

function TaskList() {
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
    handleFind();
  }, [tasks]);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
        <Table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Categoria</th>
            </tr>
          </thead>
            {
              tasks.map(({ _id, task, category }) => (
              <tbody key={ _id }>
                <tr>
                  <td>{ task }</td>
                  <td>{ category }</td>
                </tr>
              </tbody>
              ))
            }
          </Table>
    </div>
  );
}

export default TaskList;
