const API_URL = "https://en.wikipedia.org/w/rest.php/v1/";

export const getListData = async ({ value, endpoint, limit }) => {
  const response = await fetch(`${API_URL}${endpoint}?q=${value}&limit=${limit}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};