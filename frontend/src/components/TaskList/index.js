import { useState, useEffect } from 'react';
import fetchApi from "../../utils/fetch";
import { Table, Container, Icon } from "./style";
import detailsImg from "../../Images/details-btn.png";
import { useNavigate } from "react-router-dom";

function TaskList() {
  let navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFind = async () => {
    const route = "/";
    const method = "GET";
    const response = await fetchApi(route, method);
    setTasks(response);
    setIsLoading(false);
  };

  // const handleEdit = async (id, data) => {
  //   console.log(id, data)
  //   // const route = `/${id}`;
  //   // const method = "PUT";
  //   // return fetchApi(route, method, data);
  // }
  // const handleEdit = () => {
  //   console.log('edit')
  //   setRedirect(true)
  // }

  useEffect(() => {
    handleFind()
}, []);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <Container>
      <Table>
      {console.log('Hello')}

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
                    onClick={ () => navigate(`/tasks/${id}`) }
                  >
                    <Icon src={ detailsImg } alt="details" />
                  </button>
                </td>
                <td>{ task }</td>
                <td>{ category }</td>
                <td>{ status }</td>

              </tr>
            </tbody>
            ))
          }
        </Table>
    </Container>
  );
}

export default TaskList;
