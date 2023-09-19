// Names
export { STORAGE_NAMES } from "./constants/Storage.constants";

// Cookies
export { getItemCookie, setItemCookie } from "./cookies";

// Local storage
export {
  getItemLocalStorage,
  setItemLocalStorage,
  removeItemLocalStorage,
  removeItemsLocalStorage,
  clearLocalStorage,
} from "./local";

// Session storage
export {
  getItemSessionStorage,
  setItemSessionStorage,
  removeItemSessionStorage,
  removeItemsSessionStorage,
  clearSessionStorage,
} from "./session";

// Custom
export { getLanguageStore, setLanguageStore } from "./custom";
