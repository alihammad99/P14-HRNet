import { useState } from "react";
import { createContext } from "react";

const EmployeesContext = createContext();

export default EmployeesContext;

export const EmployeesProvider = ({ children }) => {
  const [value, setValue] = useState([]);

  return (
    <EmployeesContext.Provider value={{ value, setValue }}>
      {children}
    </EmployeesContext.Provider>
  );
};
