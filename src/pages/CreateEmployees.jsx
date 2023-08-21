import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NewEmployeeInputs from "../components/new-employee-inputs";
import EmployeesContext from "../context";
import hasValues from "../utils/inputChecker";

const CreateEmployee = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const { setValue } = useContext(EmployeesContext);

  const handleSave = () => {
    const check = hasValues(data);
    if (check) {
      setValue((value) => [{ ...data }, ...value]);
      alert("🤩 Employee Saved!");
    } else {
      alert("⚠️ Please fill all inputs");
    }
  };

  return (
    <div style={styles.box}>
      <h1>HRnet</h1>
      <Link to="/employees">View Current Employees</Link>
      <h2>Create Employee</h2>
      <NewEmployeeInputs data={data} setData={setData} />
      <button onClick={handleSave} style={styles.button}>
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;

const styles = {
  box: { display: "flex", flexDirection: "column" },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    overflow: "hidden",
    gap: 48,
  },
  button: {
    width: 120,
    alignSelf: "center",
    margin: 32,
  },
};
