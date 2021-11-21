import { useEffect, useState } from "react";
import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";

const API_URL = "https://en.wikipedia.org/w/rest.php/v1/";

const useDebounce = (value, delay, setSuggestions) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

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

    const timeoutId = setTimeout(() => {
      searchForSuggestions(value);
    }, delay);

    setTimer(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};

const TextInput = (props => {
  const [suggestions, setSuggestions] = useState([]);
  const [
    { value, onChange },
    { touched, error },
    { setValue }
  ] = useField(props);

  useDebounce(value, 500, setSuggestions);

  const handleAutocompleteChange = (_, values) => {
    setValue(values);
  };

  return (
    <>
      <Autocomplete
        autoComplete
        disablePortal
        onChange={handleAutocompleteChange}
        options={suggestions.map(({ excerpt }) => excerpt)}
        sx={{ width: 300 }}
        renderInput={params => (
          <TextField
            value={value}
            onChange={onChange}
            error={touched && !!error}
            helperText={touched && error}
            {...params}
            {...props}
          />
        )}
      />
    </>
  );
});

export default TextInput;