const convertDate = (dateString) => {
  const dateObj = new Date(dateString);

  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${year}-${month}-${day}`;
};
export default convertDate;
