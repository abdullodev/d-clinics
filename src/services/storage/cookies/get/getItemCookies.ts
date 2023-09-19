const getItemCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
};

export default getItemCookie;
