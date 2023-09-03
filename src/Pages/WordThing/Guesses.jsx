import { useState } from 'react';

function Guesses({ guessedLetters }) {

  return (

    <div className="guesses">
      {
        Array(26).fill(0).map((_, i) => {
          const used = guessedLetters.indexOf(String.fromCharCode(i + 65)) >= 0;
          return <span key={`guess-${ i }|`} className={`guess ${used ? "used" : "unused"}`}>{ String.fromCharCode(i + 65) }</span>
        })
      }
    </div>
  );
}

export default Guesses;