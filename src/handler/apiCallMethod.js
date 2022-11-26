import { GET, POST } from "scripts/constants";

const baseUrl = "https://fakestoreapi.com/";
const commonHeader = {
  "Content-Type": "application/json",
};

export const apiCallMethod = ({ endPoint = "", method = POST, body = {} }) => {
  let obj = {};
  if (method === GET) {
    obj = {
      method,
    };
  } else {
    obj = {
      method,
      body: JSON.stringify(body),
    };
  }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${baseUrl}${endPoint}`, {
        ...obj,
      });
      const resData = await response.json();
      resolve(resData);
    } catch (error) {
      reject(error);
    }
  });
};
