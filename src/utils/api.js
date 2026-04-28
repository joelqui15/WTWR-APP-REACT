const baseUrl = "http://localhost:3001";
const headers = {
  "Content-Type": "application/json",
};

function handleServerResponse(res) {
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

export function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return handleServerResponse(res);
  });
}
