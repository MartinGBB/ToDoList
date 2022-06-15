import { useState } from "react";
import { MyContext } from "./Context";


const Provider = ({ children }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Outro');
  const [taskDetails, setTaskDetails] = useState();

  const contextValue = {
    task,
    setTask,
    category,
    setCategory,
    taskDetails,
    setTaskDetails,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
