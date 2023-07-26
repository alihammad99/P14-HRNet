import { useState } from "react";
import Table from "../components/inputs/table";
import generateEmployees from "../data/employees";
import { useEffect } from "react";
import { searchByValue } from "../utils/search";
import NotFound from "../assets/404.png";

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
    console.log(data);
  }, [searchValue]);

  useEffect(() => {
    setPage(1);
  }, [dataShowLength, searchByValue]);

  if (!data || !employees.length)
    return (
      <div>
        <img src={NotFound} width={200} />
        <p style={{ textAlign: "center" }}>Please add Employees</p>
        <button onClick={generateEmployees}>Generate mock employees</button>
      </div>
    );
  console.log(data);
  const pages = Math.ceil(data.length / dataShowLength);
  return (
    <div style={styles.container}>
      <h2>Current Employees</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-between",
          width: "92%",
          margin: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <p>Show</p>
          <select
            value={dataShowLength}
            onChange={(e) => setDataShowLength(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <p>entries</p>
        </div>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Table employees={data} dataShowLength={dataShowLength} page={page} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "94%",
          paddingBottom: 32,
          marginTop: 8,
        }}
      >
        <button
          onClick={() => {
            localStorage.removeItem("employees");
            window.location.reload();
          }}
        style={{color:"#be0c36"}}
        >
          Delete Employees
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <button
            onClick={() => {
              if (page - 1 > 0) setPage(page - 1);
            }}
          >
            Previous
          </button>
          <p>
            Page: {page}/{pages}
          </p>
          <button
            onClick={() => {
              if (page < pages) setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
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
