import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import {
  selectSuggestionsState,
  clearData
} from "./inputSlice";
import { useHandleInputChange } from "./useHandleInputChange";
import { useClearDataOnLeave } from "./useClearDataOnLeave";

const TextInput = (({ validate, ...props }) => {
  const suggestions = useSelector(selectSuggestionsState);

  const [
    { value, onChange },
    { touched, error },
    { setValue }
  ] = useField(props);

  const handleInputChange = useHandleInputChange(onChange);

  const handleAutocompleteChange = (_, values) => {
    setValue(values);
  };

  const getOptions = () => {
    return suggestions?.map(({ excerpt }) => excerpt) || [];
  };

  useClearDataOnLeave({ clearAction: clearData });

  return (
    <Autocomplete
      id="searchAutocomplete"
      autoComplete
      disablePortal
      onChange={handleAutocompleteChange}
      options={getOptions()}
      renderInput={params => (
        <TextField
          value={value}
          onChange={handleInputChange}
          error={validate && touched && !!error}
          helperText={validate && touched && error}
          {...params}
          {...props}
        />
      )}
    />
  );
});

export default TextInput;