import { lazy, Suspense } from "react";
const TextInput = lazy(() => import("../inputs/text-input"));
const DatePickerInput = lazy(() => import("../inputs/date-picker"));
const DropdownInput = lazy(() => import("../inputs/drop-down"));
const Address = lazy(() => import("../inputs/address"));

const NewEmployeeInputs = ({ data, setData }) => {
  return (
    <div style={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={styles.box}>
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
      </Suspense>
    </div>
  );
};
NewEmployeeInputs.displayName = "NewEmployeeInputs";
export default NewEmployeeInputs;
const styles = {
  box: { display: "flex", flexDirection: "column", gap: 16 },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    overflow: "hidden",
    gap: 48,
  },
};
