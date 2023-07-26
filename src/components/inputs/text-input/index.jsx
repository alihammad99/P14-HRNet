const TextInput = ({ label = "label", setData, name }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    switch (name) {
      case "firstName":
        setData((data) => ({ ...data, firstName: value }));
        break;
      case "lastName":
        setData((data) => ({ ...data, lastName: value }));
        break;
      case "department":
        setData((data) => ({ ...data, department: value }));
        break;
      case "street":
        setData((data) => ({
          ...data,
          address: { ...data.address, street: value },
        }));
        break;
      case "city":
        setData((data) => ({
          ...data,
          address: { ...data.address, city: value },
        }));
        break;
      case "state":
        setData((data) => ({
          ...data,
          address: { ...data.address, state: value },
        }));
        break;
      case "zipCode":
        setData((data) => ({
          ...data,
          address: { ...data.address, zipCode: value },
        }));
        break;
    }
  };

  return (
    <div style={styles.container}>
      <label>{label}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default TextInput;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
};
