const API_URL = "https://en.wikipedia.org/w/rest.php/v1/";

export const getSuggestions = async (value) => {
  const response = await fetch(`${API_URL}search/title?q=${value}&limit=2`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};