export const apiWrapper = async ({
  url,
  method = "get",
  headers = {},
  body = {},
}) => {
  const payload = {
    method,
    headers,
  };
  if (method.toLowerCase() === "post") {
    payload.body = JSON.stringify(body);
  }
  const response = await fetch(url, payload);
  return response.json();
};

export const queryString = (queryObject) => {
  if (typeof queryObject === "object") {
    const keys = Object.keys(queryObject);
    if (keys.length > 0) {
      return `?${keys
        .reduce((accumulator, each) => {
          accumulator.push(`${each}=${queryObject[each]}`);
          return accumulator;
        }, [])
        .join("&")}`;
    }
  }
  return "";
};
