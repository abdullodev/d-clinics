import { STORAGE_NAMES } from "services/storage/constants/Storage.constants";

const getLanguageStore = () => {
  return (
    localStorage.getItem(STORAGE_NAMES.language) ||
    sessionStorage.getItem(STORAGE_NAMES.language)
  );
};

export default getLanguageStore;
