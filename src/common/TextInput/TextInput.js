import { forwardRef, useEffect, useRef, useState } from "react";
import { useField } from "formik";

const API_URL = "https://en.wikipedia.org/w/rest.php/v1/";

const useDebounce = (value, delay, setSuggestions) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const searchForSuggestions = async (value) => {
      if (!value || value.trim() === "") {
        setSuggestions([]);
        return;
      };

      fetch(`${API_URL}search/title?q=${value}&limit=2`)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data.pages);
        });
    };

    const timeoutId = setTimeout(() => {
      searchForSuggestions(value);
    }, delay);

    setTimer(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};

const useHandleBlur = (onBlur, setShowSuggestions) => {
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (event) => {
    onBlur(event);

    const timeoutId = setTimeout(() => {
      setShowSuggestions((showSuggestions) => !showSuggestions);
    }, 100);

    timeoutRef.current = timeoutId;
  };
};

const TextInput = forwardRef(({ label, ...props }, ref) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [{ onBlur, ...restOfField }, _, { setValue }] = useField(props);

  const handleBlur = useHandleBlur(onBlur, setShowSuggestions);

  const handleFocus = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleSuggestionClick = (suggestionValue) => {
    setValue(suggestionValue);
  };

  useDebounce(restOfField.value, 500, setSuggestions);

  return (
    <>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        ref={ref}
        {...restOfField}
        {...props}
        id="suggestions"
      />

      {
        showSuggestions &&
        suggestions.map(suggestion =>
          <option
            onClick={() => handleSuggestionClick(suggestion.excerpt)}
            key={suggestion.id}>{suggestion.excerpt}
          </option>)
      }
    </>
  );
});

export default TextInput;