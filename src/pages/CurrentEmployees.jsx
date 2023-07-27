import { useState } from "react";
import Table from "../components/inputs/table";
import { useEffect } from "react";
import { searchByValue } from "../utils/search";
import NotFound from "../components/not-found";
import Header from "../components/employees-header";
import Footer from "../components/employees-footer";

const CurrentEmployees = () => {
  const mockData = localStorage.getItem("employees");
  const employees = JSON.parse(mockData);
  const [data, setData] = useState(employees);
  const [searchValue, setSearchValue] = useState("");
  const [dataShowLength, setDataShowLength] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchValue.length > 1) {
      searchByValue(searchValue, setData);
    } else {
      setData(employees);
    }
  }, [searchValue]);

  useEffect(() => {
    setPage(1);
  }, [dataShowLength, searchByValue]);

  if (!data || !employees.length) return <NotFound />;
  const pages = Math.ceil(data.length / dataShowLength);
  return (
    <div style={styles.container}>
      <h2>Current Employees</h2>

      <Header
        dataShowLength={dataShowLength}
        setDataShowLength={setDataShowLength}
        setSearchValue={setSearchValue}
      />
      <Table employees={data} dataShowLength={dataShowLength} page={page} />
      <Footer page={page} setPage={setPage} pages={pages} />
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
