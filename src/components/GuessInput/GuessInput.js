import React from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');
  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guessInput);
        }}
      > 
        <label for="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text"
          value={guessInput}
          onChange={(event) => {
            setGuessInput(event.target.value)
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
