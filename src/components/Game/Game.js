import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import RenderGuess from '../RenderGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //lifting state up to Game.js for access from GuessInput and RenderGuess components
  const [savedGuesses, setSavedGuesses] = React.useState([]);

  function handleSubmit(newGuess) {
    console.log("Received guess", newGuess);
    setSavedGuesses([...savedGuesses, newGuess]);
  }

  return (
    <>
      <RenderGuess savedGuesses={savedGuesses}/>
      <GuessInput handleSubmit={handleSubmit}/>
    </>
  );
}

export default Game;
