// Text.tsx
import React from "react";

type TextProps = {
  selectWord: string;
  guessWords: string[];
  isGameOver: boolean;
};

const Text: React.FC<TextProps> = ({ selectWord, guessWords, isGameOver }) => {
  return (
    <div className="lines">
      {selectWord.split("").map((letter, index) => (
        <div className="line" key={index}>
          <span
            style={{
              visibility:
                isGameOver || guessWords.includes(letter)
                  ? "visible"
                  : "hidden",
              color:
                isGameOver && !guessWords.includes(letter) ? "red" : "inherit",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Text;
