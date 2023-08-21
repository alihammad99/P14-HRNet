import { lazy, Suspense } from "react";
import NotFound from "../components/not-found";
import EmployeesContext from "../context";
import { useContext } from "react";
const Testc = lazy(() => import("oc-react-tables"));

const CurrentEmployees = () => {
  const { value } = useContext(EmployeesContext);

  console.log(value);

  if (!value.length) return <NotFound />;
  return (
    <div style={styles.container}>
      <h2>Current Employees</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Testc data={value} />
      </Suspense>
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
