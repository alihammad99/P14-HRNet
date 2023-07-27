import generateEmployees from "../../data/employees";
import NotFoundImg from "../../assets/404.png";
const NotFound = () => {
  return (
    <div>
      <img src={NotFoundImg} width={200} />
      <p style={{ textAlign: "center" }}>Please add Employees</p>
      <button onClick={generateEmployees}>Generate mock employees</button>
    </div>
  );
};

export default NotFound;
