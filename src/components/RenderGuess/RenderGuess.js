import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function RenderGuess( {savedGuesses, answer} ) {

  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return (
            <Guess key={num} value={savedGuesses[num]} answer={answer} />
          )
        })}
      </div>
    </>
  );
}

export default RenderGuess;
