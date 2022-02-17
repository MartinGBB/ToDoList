import fetchApi from "../../utils/fetch";
import { useState, useEffect } from 'react';

function Task() {
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
      {
        tasks.map(({ task, category }, i) => (
          <div key={ i }>
            <span>{ task }</span>
            <span> -{ category }</span>
          </div>
        ))
      }
    </div>
  );
}

export default Task;
