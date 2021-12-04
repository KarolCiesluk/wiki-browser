const localStorageKey = "history";

export const saveHistoryInLocalStorage = (history) => {
  localStorage.setItem(localStorageKey, JSON.stringify(history));
};

export const getHistoryFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};