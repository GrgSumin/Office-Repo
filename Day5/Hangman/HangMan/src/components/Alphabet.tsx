import React from "react";

type ClickProps = {
  guessWords: string[];
  handleGuess: (letter: string) => void;
};

export const Alphabet = ({ handleGuess, guessWords }: ClickProps) => {
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  return (
    <div>
      <ul className="alphaBet">
        {alphabet.map((letter, index) => (
          <li
            key={index}
            onClick={() => handleGuess(letter)}
            style={
              guessWords?.join().includes(letter.toLowerCase())
                ? { backgroundColor: "red" }
                : {}
            }
          >
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};
