import { STORAGE_NAMES } from "services/storage/constants/Storage.constants";
import { getItemCookie } from "services/storage/cookies";

const getTokenStorage = () => {
  return getItemCookie(STORAGE_NAMES.authorization) || "";
};

export default getTokenStorage;
