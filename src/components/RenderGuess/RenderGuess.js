import React from 'react';

function RenderGuess( {savedGuesses} ) {

  return (
    <>
      <div className='guess-results'>
        {savedGuesses.map((guess, index) => {
          return (
            <p className='guess' key={index}>
              {guess}
            </p>
          )
        })}
      </div>
    </>
  );
}

export default RenderGuess;
