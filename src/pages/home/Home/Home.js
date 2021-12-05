import { PageTitle, inputValueName, SearchForm, TextInput } from "common";
import { Button, FormWrapper } from "./styled";

const Home = () => {
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
          />

          <Button type="submit">Search</Button>
        </FormWrapper>
      </SearchForm>
    </>
  );
};

export default Home;