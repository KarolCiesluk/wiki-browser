import { inputValueName, SearchForm, TextInput } from "common";
import { Button, Header, Wrapper } from "./styled";

const Home = () => {
  return (
    <>
      <Header>Wiki browser</Header>

      <SearchForm>
        <Wrapper>
          <TextInput
            autoFocus
            name={inputValueName}
            type="text"
            placeholder="Search Wikipedia*"
            validate
          />
          <Button type="submit">Search</Button>
        </Wrapper>
      </SearchForm>
    </>
  );
};

export default Home;