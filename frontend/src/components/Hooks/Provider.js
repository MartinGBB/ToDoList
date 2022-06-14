import { useState } from "react";
import { MyContext } from "./Context";


const Provider = ({ children }) => {
  const [taskDetails, setTaskDetails] = useState();

  const contextValue = {
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
