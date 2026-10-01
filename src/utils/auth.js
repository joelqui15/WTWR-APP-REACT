import { baseUrl } from "./api";
import { headers } from "./api";
import { handleServerResponse } from "./api";

export const register = (name, avatar, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return handleServerResponse(res);
  });
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return handleServerResponse(res);
  });
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return handleServerResponse(res);
  });
};
