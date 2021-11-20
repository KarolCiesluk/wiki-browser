import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <div>
      <form>
        <label>
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Wikipedia"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
};

export default Home;