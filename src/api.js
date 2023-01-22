export const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const removeUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const getUser = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const updateUser = async ({ id, ...data }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const createUser = async ({ ...data }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
