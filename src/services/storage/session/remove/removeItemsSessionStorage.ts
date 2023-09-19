const removeItemsSessionStorage = (names: Array<string>) => {
  names?.forEach((name) => sessionStorage.removeItem(name));
};

export default removeItemsSessionStorage;
