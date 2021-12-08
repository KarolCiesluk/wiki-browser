import { useSelector } from "react-redux";
import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";

import { useClearDataOnLeave } from "common";
import { actions, selectors } from "../textInputSlice";
import { useHandleInputChange } from "./useHandleInputChange";

const TextInput = (({ validate, ...props }) => {
  const suggestions = useSelector(selectors.selectData);

  const [
    { value, onChange },
    { touched, error },
    { setValue }
  ] = useField(props);

  useHandleInputChange(value);

  const handleAutocompleteChange = (_, values) => {
    setValue(values || "");
  };

  const getOptions = () => {
    return suggestions?.map(({ excerpt }) => excerpt) || [];
  };

  useClearDataOnLeave({ clearAction: actions.clear });

  return (
    <Autocomplete
      autoComplete
      disablePortal
      inputValue={value}
      onChange={handleAutocompleteChange}
      options={getOptions()}
      renderInput={params => (
        <TextField
          onChange={onChange}
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