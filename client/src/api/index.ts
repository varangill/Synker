const getData = (API_URL: string) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${API_URL}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const postData = (API_URL: string, bodyData: object) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${API_URL}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const deleteData = (API_URL: string, bodyData: object) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${API_URL}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export { getData, postData, deleteData };
