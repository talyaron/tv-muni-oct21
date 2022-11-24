import { useState } from "react";
import Joi from "joi";

const numberJoi = Joi.string().required();

const SearchBox = () => {
  const [result, setResult] = useState<string>("");
  const [number, setNumber] = useState<number>(0);

  function handleSearch(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements.searchTerm.value);
      setResult(ev.target.elements.searchTerm.value);

      const { error } = numberJoi.validate(ev.target.elements.number.valueAsNumber);
      if (error) throw error;

      setNumber(ev.target.elements.number.value);
      console.log(typeof ev.target.elements.number.valueAsNumber);
    } catch (error:any) {
      console.error(error);
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <h2>{result}</h2>
      <h3>{number}</h3>
      <input type="text" name="searchTerm" placeholder="search" />
      <input type="number" name="number" placeholder="number" />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default SearchBox;
