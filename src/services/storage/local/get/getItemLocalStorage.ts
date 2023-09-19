import { decode } from "services/base64";

const getItemLocalStorage = (name: string) => {
  try {
    return decode(localStorage.getItem(name));
  } catch (error) {
    return console.error(
      "Error services function: getItemLocalStorage,",
      error
    );
  }
};

export default getItemLocalStorage;
