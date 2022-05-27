import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import fetchApi from "../../utils/fetch";
import { Table, Container, Icon } from "./style";
import detailsImg from "../../Images/details-btn.png";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFind = async () => {
    const route = "/";
    const method = "GET";
    const response = await fetchApi(route, method);
    setTasks(response);
    setIsLoading(false);
  };
  
  // const handleDelete = async (id) => {
  //   const route = `/${id}`;
  //   const method = "DELETE";
  //   return fetchApi(route, method);
  // }

  // const handleEdit = async (id, data) => {
  //   console.log(id, data)
  //   // const route = `/${id}`;
  //   // const method = "PUT";
  //   // return fetchApi(route, method, data);
  // }
  const handleEdit = () => (
    setRedirect(true)
  )

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
                    onClick={ () => handleEdit() }
                  >
                    <Icon src={ detailsImg } alt="details" />
                  </button>
                  { redirect && <Navigate to="edit-task" /> }
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
