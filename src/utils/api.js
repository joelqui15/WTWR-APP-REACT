export const baseUrl = "http://localhost:3001";
export const headers = {
  "Content-Type": "application/json",
};

export function handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

export function getClothingItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return handleServerResponse(res);
  });
}

export function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return handleServerResponse(res);
  });
}

export function removeItem(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}

export function editUser({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then((res) => handleServerResponse(res));
}

export function addCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}

export function removeCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}
