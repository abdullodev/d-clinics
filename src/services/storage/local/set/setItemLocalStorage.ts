import { encode } from "services/base64";

const setItemLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, encode(data));
};

export default setItemLocalStorage;
