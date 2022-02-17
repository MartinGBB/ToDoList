import fetchApi from "../../utils/fetch";
import { useState, useEffect } from 'react';

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
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Categoria</th>
            </tr>
          </thead>
            {
              tasks.map(({ task, category }, i) => (
              <tbody key={ i }>
                <tr>
                  <td>{ task }</td>
                  <td>{ category }</td>
                </tr>
              </tbody>
              ))
            }
          </table>
    </div>
  );
}

export default TaskList;
