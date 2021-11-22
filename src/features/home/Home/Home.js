import { inputValueName, SearchForm, TextInput } from "common";

const Home = () => {
  return (
    <SearchForm>
      <TextInput
        autoFocus
        name={inputValueName}
        type="text"
        label="Search Wikipedia"
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Home;