import { useState } from "react";
import TextInput from "../components/inputs/text-input";
import DatePickerInput from "../components/inputs/date-picker";
import Address from "../components/inputs/address";
import DropdownInput from "../components/inputs/drop-down";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={styles.container}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <TextInput label="First Name" setData={setData} name="firstName" />
          <TextInput label="Last Name" setData={setData} name="lastName" />
          <DatePickerInput
            label="Date of Birth"
            data={data}
            setData={setData}
          />
          <DatePickerInput label="Start Date" data={data} setData={setData} />
          <DropdownInput name="department" data={data} setData={setData} />
        </div>
        <div>
          <Address data={data} setData={setData} />
        </div>
      </div>
      <button
        onClick={() => {
          const check = hasValues(data);
          if (check) {
            saveEmployee(data);
          } else {
            alert("Please fill all inputs");
          }
        }}
        style={styles.button}
      >
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // maxWidth: 320,
    overflow: "hidden",
    gap: 48,
  },
  button: {
    backgroundColor: "#efeff4",
    alignSelf: "center",
    marginTop: 56,
  },
};

const saveEmployee = (employee) => {
  const mockData = localStorage.getItem("employees");
  const employees = JSON.parse(mockData);
  if (employees) {
    localStorage.setItem("employees", JSON.stringify([employee, ...employees]));
  } else {
    localStorage.setItem("employees", JSON.stringify([{ ...employee }]));
    console.log(localStorage.getItem("employees"));
  }
};

const hasValues = (obj) => {
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      // If the value is an object (but not an array), recursively check its keys
      if (!hasValues(value)) {
        return false;
      }
    } else {
      // If the value is not an object, check if it's an empty string
      if (value === "") {
        return false;
      }
    }
  }

  return true; // If all keys have values, return true
};
