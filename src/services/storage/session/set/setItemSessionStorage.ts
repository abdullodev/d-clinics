import { encode } from "services/base64";

const setItemSessionStorage = (name: string, data: any) => {
  sessionStorage.setItem(name, encode(data));
};

export default setItemSessionStorage;
