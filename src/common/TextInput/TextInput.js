import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import {
  selectSuggestions,
  clearData
} from "./inputSlice";
import { useHandleInputChange } from "./useHandleInputChange";
import { useClearDataOnLeave } from "./useClearDataOnLeave";

const TextInput = (({ validate, ...props }) => {
  const suggestions = useSelector(selectSuggestions);

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
      autoComplete
      disablePortal
      inputValue={value}
      onChange={handleAutocompleteChange}
      options={getOptions()}
      renderInput={params => (
        <TextField
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