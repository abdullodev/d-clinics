import { decode } from "services/base64";

const getItemSessionStorage = (name: string) => {
  try {
    return decode(sessionStorage.getItem(name));
  } catch (error) {
    return console.error(
      "Error services function: getItemSessionStorage,",
      error
    );
  }
};

export default getItemSessionStorage;
