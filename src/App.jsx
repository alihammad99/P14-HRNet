import { EmployeesProvider } from "./context";
import CreateEmployees from "./pages/CreateEmployees";
import CurrentEmployees from "./pages/CurrentEmployees";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CreateEmployees />,
    },
    {
      path: "/employees",
      element: <CurrentEmployees />,
    },
  ]);
  return (
    <div style={styles.container}>
      <EmployeesProvider>
        <RouterProvider router={router} />
      </EmployeesProvider>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center" /* Horizontal centering */,
    alignItems: "center" /* Vertical centering */,
    height: "100vh",
    width: "100%",
  },
};
