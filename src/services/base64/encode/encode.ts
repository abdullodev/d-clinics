const encode = (value: string) => {
  return window.btoa(JSON.stringify(value));
};

export default encode;
