import { useTheme } from "@mui/material";

import {
  PageTitle,
  inputValueName,
  SearchForm,
  TextInput,
  useMediaWatcher
} from "common";
import { Button, FormWrapper } from "./styled";

const Home = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaWatcher({
    maxWidth: theme.breakpoints.values.sm
  });

  return (
    <>
      <PageTitle>Wiki browser</PageTitle>

      <SearchForm>
        <FormWrapper>
          <TextInput
            autoFocus
            name={inputValueName}
            type="text"
            label="Search Wikipedia*"
            validate
            size={isSmallScreen ? "small" : "medium"}
          />

          <Button type="submit">Search</Button>
        </FormWrapper>
      </SearchForm>
    </>
  );
};

export default Home;