import hasValues from "./inputChecker";

const saveEmployee = (employee) => {
  const check = hasValues(employee);
  const mockData = localStorage.getItem("employees");
  const employees = JSON.parse(mockData);
  if (check) {
    if (employees) {
      localStorage.setItem(
        "employees",
        JSON.stringify([employee, ...employees])
      );
    } else {
      localStorage.setItem("employees", JSON.stringify([{ ...employee }]));
    }
    alert("🤩 Employee Saved!");
  } else {
    alert("⚠️ Please fill all inputs");
  }
};

export default saveEmployee;
