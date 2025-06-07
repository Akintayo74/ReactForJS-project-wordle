import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess( {value, answer} ) {
  const checkedGuess = value ? checkGuess(value, answer) : null;

  return (
    <>
      {/* {value && console.log(checkGuess(value, answer))} */}
      <p className="guess">
        {range(5).map((num) => (
          <span className={`cell ${checkedGuess ? checkedGuess[num].status : ''}`} key={num}>
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </>
  )
}

export default Guess;
