import React from 'react';

//where and how will we render DisplayResults?

function DisplayResults( {status, numOfGuesses, answer} ) {
  return (
    <>
    {status === 'won' && 
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
        </p>
      </div>
    }

      {status === 'lost' &&
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      }
    </>
  );
}

export default DisplayResults;
