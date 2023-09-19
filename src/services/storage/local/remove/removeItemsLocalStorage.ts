const removeItemsLocalStorage = (names: Array<string>) => {
  names?.forEach((name) => localStorage.removeItem(name));
};

export default removeItemsLocalStorage;
