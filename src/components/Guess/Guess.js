import React from 'react';
import { range } from '../../utils';

// 1. Create a DOM structure similar to that in the md file.
//2. I'll need access to the savedGuesses state for this
//3. The range utility can convert the savedGuesses state to an array to mapped over

function Guess( {value} ) {
  return (
    <>
      {/* I want to map over the savedGuesses state, assigning each letter a grid cell */}
        <p className="guess">
          {range(5).map((num) => (
            <span className='cell' key={num}>
              {value ? value[num] : undefined}
            </span>
          ))}
        </p>
    </>
  )
}

export default Guess;
