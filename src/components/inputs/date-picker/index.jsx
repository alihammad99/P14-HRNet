import { memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerInput = memo(({ label = "date picker", data, setData }) => {
  return (
    <div style={styles.container}>
      <label>{label}</label>
      {label === "Date of Birth" ? (
        <DatePicker
          selected={data.dateOfBirth}
          onChange={(date) => setData({ ...data, dateOfBirth: date })}
        />
      ) : (
        <DatePicker
          selected={data.startDate}
          onChange={(date) => setData({ ...data, startDate: date })}
        />
      )}
    </div>
  );
});
DatePickerInput.displayName = "DatePickerInput";

export default DatePickerInput;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
};
