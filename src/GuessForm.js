import { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function GuessForm({ handleGuess }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleGuess(input);
    setInput("");
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Guess the movie</FormLabel>
        <Input onChange={handleChange} type="text" value={input} name="movie" />
      </FormControl>
    </>
  );
}
