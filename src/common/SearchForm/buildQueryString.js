export const buildQueryString = ({ key, value }) => {
  const searchParams = new URLSearchParams();

  if (value) {
    searchParams.set(key, value);
  }

  return searchParams.toString();
};