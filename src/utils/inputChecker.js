const hasValues = (obj) => {
    for (const key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && !Array.isArray(value)) {
        if (!hasValues(value)) {
          return false;
        }
      } else {
        if (value === "") {
          return false;
        }
      }
    }
  
    return true;
  };
  
  export default hasValues;
  