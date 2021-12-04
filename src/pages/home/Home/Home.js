import { PageTitle, inputValueName, SearchForm, TextInput } from "common";
import { Button, Wrapper } from "./styled";

const Home = () => {
  return (
    <>
      <PageTitle>Wiki browser</PageTitle>

      <SearchForm>
        <Wrapper>
          <TextInput
            autoFocus
            name={inputValueName}
            type="text"
            label="Search Wikipedia*"
            validate
          />
          <Button type="submit">Search</Button>
        </Wrapper>
      </SearchForm>
    </>
  );
};

export default Home;