function makeQueryString(params: object | undefined) {
  let queryString = "?";
  if (!params) {
    return "";
  } else {
    Object.entries(params).forEach(([key, value], index) => {
      if (value !== null && value !== "" && value !== undefined) {
        if (typeof value === "string") {
          value = encodeURI(value);
        }
        queryString = `${queryString}${
          index !== 0 ? "&" : ""
        }${key}=${encodeURI(JSON.stringify(value))}`;
      }
    });
    return queryString;
  }
}

export default makeQueryString;
