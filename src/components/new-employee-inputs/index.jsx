import TextInput from "../inputs/text-input";
import DatePickerInput from "../inputs/date-picker";
import DropdownInput from "../inputs/drop-down";
import Address from "../inputs/address";

const NewEmployeeInputs = ({ data, setData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <TextInput label="First Name" setData={setData} name="firstName" />
        <TextInput label="Last Name" setData={setData} name="lastName" />
        <DatePickerInput label="Date of Birth" data={data} setData={setData} />
        <DatePickerInput label="Start Date" data={data} setData={setData} />
        <DropdownInput name="department" data={data} setData={setData} />
      </div>
      <div>
        <Address data={data} setData={setData} />
      </div>
    </div>
  );
};

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
