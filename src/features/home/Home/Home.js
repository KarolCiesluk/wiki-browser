// import { Button } from "@mui/material";
import { inputValueName, SearchForm, TextInput } from "common";
import { Button, Wrapper } from "./styled";

const Home = () => {
  return (
    <SearchForm>
      <Wrapper>
        <TextInput
          autoFocus
          name={inputValueName}
          type="text"
          label="Search Wikipedia*"
        />
        <Button type="submit">Search</Button>
      </Wrapper>
    </SearchForm>
  );
};

export default Home;