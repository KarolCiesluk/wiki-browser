import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import { actions, selectors } from "../textInputSlice";
import { useHandleInputChange } from "./useHandleInputChange";
import { useClearDataOnLeave } from "common/useClearDataOnLeave";

const TextInput = (({ validate, ...props }) => {
  const suggestions = useSelector(selectors.selectData);

  const [
    { value, onChange },
    { touched, error },
    { setValue }
  ] = useField(props);

  const handleInputChange = useHandleInputChange(onChange);

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
      isOptionEqualToValue={(option, value) => option.id === value.id}
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