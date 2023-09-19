import { STORAGE_NAMES } from "services/storage/constants/Storage.constants";

const setLanguageStore = (language: string) => {
  localStorage.setItem(STORAGE_NAMES.language, language);
  sessionStorage.setItem(STORAGE_NAMES.language, language);
};

export default setLanguageStore;
