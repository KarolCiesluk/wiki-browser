export const getTitleText = ({ listLength, query }) => {
  if (!!listLength) {
    return `Search results for "${query}" (${listLength}):`;
  }

  return `Sorry, there are no results for "${query}"`;
};