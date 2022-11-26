export const setSessionStorage = (key, value) => {
  const stateStr = JSON.stringify(value);
  return sessionStorage.setItem(key, stateStr);
};

export const getSessionStorage = (key, str = false) => {
  const data = sessionStorage.getItem(key);
  if (str) {
    return data;
  }
  return JSON.parse(data);
};

// export const sessionStorageData = {
//   setData(key, value) {
//     const stateStr = JSON.stringify(value);
//     return sessionStorage.setItem(key, stateStr);
//   },
//   getData(key) {},
// };
