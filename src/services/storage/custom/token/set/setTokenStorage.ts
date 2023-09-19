import { jwtParse } from "services/jwt";
import { setItemCookie } from "services/storage/cookies";
import { STORAGE_NAMES } from "services/storage/constants/Storage.constants";

const setTokenStorage = (value: string, toRemember = false) => {
  if (toRemember) {
    setItemCookie(STORAGE_NAMES.authorization, value, {
      expires: new Date(jwtParse(value)?.exp * 1000).toUTCString(),
    });
  } else {
    setItemCookie(STORAGE_NAMES.authorization, value);
  }
};

export default setTokenStorage;
