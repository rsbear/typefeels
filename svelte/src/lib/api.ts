async function poster(endpoint: string, data: any) {
  return fetch(`http://localhost:3000/api${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((r) => r);
}

export async function getter(endpoint: string, data: any) {
  return fetch(`http://localhost:3000/api${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((r) => r);
}

const api = {
  getter,
  poster,
};

export default api;
