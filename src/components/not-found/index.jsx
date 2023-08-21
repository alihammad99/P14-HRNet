import { memo, useContext } from "react";
import generateEmployees from "../../data/employees";
import EmployeesContext from "../../context";

const NotFound = memo(() => {
  const { value, setValue } = useContext(EmployeesContext);
  return (
    <div>
      <img src={"/404.webp"} loading="lazy" width={200} />
      <p style={{ textAlign: "center" }}>Please add Employees</p>
      <button
        onClick={() => {
          const mock = generateEmployees();
          setValue((value) => [...mock, ...value]);
          console.log(value);
        }}
      >
        Generate mock employees
      </button>
    </div>
  );
});
NotFound.displayName = "NotFound";

export default NotFound;
