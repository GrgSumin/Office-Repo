// App.tsx
import React, { useEffect, useState } from "react";
import "./App.css";
import { Alphabet } from "./components/Alphabet";
import { HangManDraw } from "./components/HangManDraw";
import Text from "./components/Text";
import words from "./components/wordList";

function App() {
  const [selectWord, setSelectWord] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessWords, setGuessWords] = useState<string[]>([]);
  const [incorrectGuess, setIncorrectGuesses] = useState(0);

  useEffect(() => {
    startAgain();
  }, []);

  const startAgain = () => {
    const index = Math.floor(Math.random() * words.length);
    setSelectWord(words[index]);
    setGuessWords([]);
    setIncorrectGuesses(0);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (isGameOver) {
      alert("You have lost");
    }
  }, [isGameOver, guessWords, selectWord]);

  const handleGuess = (letter: string) => {
    letter = letter.toLowerCase();
    const newGuess = [...guessWords, letter];
    if (!guessWords.includes(letter)) {
      setGuessWords(newGuess);
    } else {
      return;
    }

    if (!selectWord.toLowerCase().includes(letter)) {
      setIncorrectGuesses((prevIncorrect) => prevIncorrect + 1);
    } else {
      setTimeout(() => {
        const correctGuess = selectWord
          .toLowerCase()
          .split("")
          .every((char) => guessWords.includes(char));

        if (correctGuess) {
          setIsGameOver(true);
          alert("Well Done! You guessed the word correctly!");
        }
      }, 0);
    }

    if (incorrectGuess >= 5) {
      setIsGameOver(true);
    }
  };

  return (
    <div
      style={{
        maxWidth: "850px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <HangManDraw incorrectGuess={incorrectGuess} />
      <Text
        selectWord={selectWord}
        guessWords={guessWords}
        isGameOver={isGameOver}
      />
      {isGameOver && <button onClick={startAgain}>Restart</button>}
      <Alphabet handleGuess={handleGuess} guessWords={guessWords} />
    </div>
  );
}

export default App;
