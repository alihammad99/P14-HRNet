import { memo } from "react";
import { states } from "../../../data/states";
import { departments } from "../../../data/departments";

const DropdownInput = memo(({ name, data, setData }) => {
  if (name === "state") {
    return (
      <div style={styles.container}>
        <label>State</label>
        <RenderStates data={data} setData={setData} />
      </div>
    );
  } else if (name === "department") {
    return (
      <div style={styles.container}>
        <label>Department</label>
        <RenderDepartments data={data} setData={setData} />
      </div>
    );
  } else {
    return <p>Please add a valid dropdown menu name: department or state</p>;
  }
});
DropdownInput.displayName = "DropdownInput";

export default DropdownInput;

const RenderStates = memo(({ data, setData }) => {
  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      address: { ...data.address, state: event.target.value },
    }));
  };

  const options = states.map((state) => (
    <option key={state.abbreviation} value={state.name}>
      {state.name}
    </option>
  ));
  return (
    <select
      style={styles.selection}
      value={data.address.state}
      onChange={handleChange}
    >
      {options}
    </select>
  );
});
RenderStates.displayName = "RenderStates";

const RenderDepartments = memo(({ data, setData }) => {
  const handleChange = (event) => {
    setData((data) => ({ ...data, department: event.target.value }));
  };

  const options = departments.map((department) => (
    <option key={department.id} value={department.name}>
      {department.name}
    </option>
  ));
  return (
    <select
      style={styles.selection}
      value={data.department}
      onChange={handleChange}
    >
      {options}
    </select>
  );
});
RenderDepartments.displayName = "RenderDepartments";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
  selection: {
    padding: 4,
  },
};
