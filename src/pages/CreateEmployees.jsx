import { useState } from "react";
import { Link } from "react-router-dom";
import saveEmployee from "../utils/saveEmployee";
import NewEmployeeInputs from "../components/new-employee-inputs";

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
  return (
    <div style={styles.box}>
      <h1>HRnet</h1>
      <Link to="/employees">View Current Employees</Link>
      <h2>Create Employee</h2>
      <NewEmployeeInputs data={data} setData={setData} />
      <button onClick={() => saveEmployee(data)} style={styles.button}>
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
