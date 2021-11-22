import { useEffect } from "react";
import { useRef } from "react";

const API_URL = "https://en.wikipedia.org/w/rest.php/v1/";

export const useDebounce = (value, delay, setSuggestions) => {
  const timeoutRef = useRef();

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    const searchForSuggestions = async () => {
      if (!value || value.trim() === "") {
        setSuggestions([]);
        return;
      };

      fetch(`${API_URL}search/title?q=${value}&limit=2`)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data.pages);
        })
        .catch(error => console.error(error));
    };

    timeoutRef.current = setTimeout(() => {
      searchForSuggestions(value);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};