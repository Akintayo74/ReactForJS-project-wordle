import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import RenderGuess from '../RenderGuess';
import DisplayResults from '../DisplayResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //lifting state up to Game.js for access from GuessInput and RenderGuess components
  const [savedGuesses, setSavedGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleSubmit(newGuess) {
    console.log("Received guess", newGuess);
    setSavedGuesses([...savedGuesses, newGuess]);

    if(newGuess === answer) {
      setStatus('won')
    } else if(savedGuesses.length+1 >= 6) {
        setStatus('lost')
    }
  }

  return (
    <>
      <DisplayResults status={status} numOfGuesses={savedGuesses.length} answer={answer}/>
      <RenderGuess savedGuesses={savedGuesses} answer={answer}/>
      <GuessInput handleSubmit={handleSubmit} status={status}/>
    </>
  );
}

export default Game;
