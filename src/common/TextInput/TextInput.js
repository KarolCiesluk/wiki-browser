import { useState } from "react";
import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";

import { useDebounce } from "./useDebounce";

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