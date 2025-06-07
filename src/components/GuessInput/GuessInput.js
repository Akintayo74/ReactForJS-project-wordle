import React from 'react';

function GuessInput({ handleSubmit, status} ) {
  const [guessInput, setGuessInput] = React.useState('');

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(guessInput);
          setGuessInput('');
        }}
      > 
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter input"
          value={guessInput}
          onChange={(event) => {
            setGuessInput(event.target.value.toUpperCase());
          }}
          disabled={status !== 'running'}
        />
      </form>
    </>
  );
}

export default GuessInput;
