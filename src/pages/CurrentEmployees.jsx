import Testc from "oc-react-tables";
import NotFound from "../components/not-found";

const CurrentEmployees = () => {
  const mockData = localStorage.getItem("employees");
  const employees = JSON.parse(mockData);

  if (!employees) return <NotFound />;
  // const pages = Math.ceil(data.length / dataShowLength);
  return (
    <div style={styles.container}>
      <h2>Current Employees</h2>
      <Testc data={employees} />
    </div>
  );
};

export default CurrentEmployees;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    margin: "0 auto",
    width: "100%",
  },
};
