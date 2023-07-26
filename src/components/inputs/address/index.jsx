import DropdownInput from "../drop-down";
import TextInput from "../text-input";

const Address = ({ data, setData }) => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>Address</p>
      <div style={styles.box}>
        <TextInput label="Street" setData={setData} name="street" />
        <TextInput label="City" setData={setData} name="city" />
        <DropdownInput name="state" data={data} setData={setData} />
        <TextInput label="Zip Code" setData={setData} name="zipCode" />
      </div>
    </div>
  );
};

export default Address;

const styles = {
  container: {
    border: "1px solid black",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    margin: " 16px 0",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  title: {
    position: "absolute",
    top: -32,
    padding: 4,
    background: "#fff",
  },
};
