const decode = (value: string | null) => {
  if (value === null) return "";
  return JSON.parse(window.atob(value));
};

export default decode;
