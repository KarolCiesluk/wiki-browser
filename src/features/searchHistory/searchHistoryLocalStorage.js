const localStorageKey = "history";

export const saveHistoryInLocalStorage = (history) => {
  localStorage.setItem(localStorageKey, JSON.stringify(history));
};

export const getHistoryFromLocalStorage = () => {
  // console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};