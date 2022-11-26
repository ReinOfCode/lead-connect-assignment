export const setToSessionStorage = (key, value) => {
  const stateStr = JSON.stringify(value);
  return sessionStorage.setItem(key, stateStr);
};

export const getStateFromSessionStorage = (key) => {
  const data = sessionStorage.getItem(key);
  return JSON.parse(data);
};

// export const sessionStorageData = {
//   setData(key, value) {
//     const stateStr = JSON.stringify(value);
//     return sessionStorage.setItem(key, stateStr);
//   },
//   getData(key) {},
// };
