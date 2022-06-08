import { MyContext } from "./Context";


const Provider = ({ children }) => {
  const contextValue = {

  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
