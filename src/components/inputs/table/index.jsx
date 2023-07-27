import { useState } from "react";
import TTitle from "./TTitle";
import { useEffect } from "react";

const Table = ({ employees, dataShowLength, page }) => {
  const [activeSort, setActiveSort] = useState("");
  const [data, setData] = useState(employees);
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    setData(employees);
  }, [employees]);

  useEffect(() => {
    console.log(data.slice(dataShowLength * (page - 1), dataShowLength * page));
    setDisplayData(
      data.slice(dataShowLength * (page - 1), dataShowLength * page)
    );
  }, [page, dataShowLength, data]);

  if (!employees || !displayData) return;

  const sortedEmployees = displayData.map((item, index) => (
    <tr key={index} style={styles.row}>
      <td style={styles.cell}>{index + 1 + (page - 1) * dataShowLength}</td>
      <td style={styles.cell}>{item.firstName}</td>
      <td style={styles.cell}>{item.lastName}</td>
      <td style={styles.cell}>{item.startDate}</td>
      <td style={styles.cell}>{item.department}</td>
      <td style={styles.cell}>{item.dateOfBirth}</td>
      <td style={styles.cell}>{item.address.street}</td>
      <td style={styles.cell}>{item.address.city}</td>
      <td style={styles.cell}>{item.address.state}</td>
      <td style={styles.cell}>{item.address.zipCode}</td>
    </tr>
  ));

  return (
    <>
      {!displayData.length && <p>No results found :(</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="N"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="First Name"
              sort="firstName"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Last Name"
              sort="lastName"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Start Date"
              sort="startDate"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Department"
              sort="department"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Date of Birth"
              sort="dateOfBirth"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Street"
              sort="address.street"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="City"
              sort="address.city"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="State"
              sort="address.state"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Zip Code"
              sort="address.zipCode"
            />
          </tr>
        </thead>
        <tbody>{sortedEmployees}</tbody>
      </table>
    </>
  );
};

export default Table;

// Example usage:

const styles = {
  table: {
    borderCollapse: "collapse",
    fontSize: 12,
    width: "100%",
  },
  header: {
    backgroundColor: "#f2f2f2",
    padding: "10px 20px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  row: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  cell: {
    padding: "10px 20px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  tableTitleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 8px",
    transform: "translateX(-8px)",
  },
};
