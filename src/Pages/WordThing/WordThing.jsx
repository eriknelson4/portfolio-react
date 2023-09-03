import { useState, useEffect } from 'react';
import Modal from '../../Components/Modals/Modal';
import WinModal from './WinModal';
import words from './data/words5.json';
import './styles/WordThing.scss';
import PastEntry from './PastEntry';
import NewEntry from './NewEntry';
import NewGame from './NewGame';
import Guesses from './Guesses';

const defaultState = {
  word: null,
  turn:0,
  turnLimit:6,
  history:[],
  victory: null,
  guessedLetters: []
}

function WordThing() {
  const [gameState, setGameState] = useState({... defaultState });
  const [modalState, setModalState] = useState(false);

  const resetGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    console.log(newWord);
    setGameState({ ... defaultState, word:newWord.toUpperCase() });
  }

  const processEntry = (newEntry) => {
    let history = [];

    for (let i = 0; i < newEntry.length; i++) {
      let letterScore = [];
      letterScore.push(newEntry[i]);
      let score = 0;

      // Is letter in there at all, so we check against a set
      const wordSet = new Set(gameState.word);
      const letterInSet = wordSet.has(newEntry[i]);
      if (letterInSet) { score = 1; }

      // Check against specific character and position
      if (newEntry[i] === gameState.word[i]) { score = 2; }

      letterScore.push(score);
      history.push(letterScore);
    }

    let newHistory = [...gameState.history, history];
    let entryArray = new Set(newEntry);
    let newGuessedLetters = new Set([...gameState.guessedLetters, ...entryArray]);
    console.log(newGuessedLetters);

    setGameState({
      ...gameState,
      history: newHistory,
      victory: (gameState.word === newEntry),
      guessedLetters: [...newGuessedLetters]
    });
  }

  useEffect(() => {
    if (gameState.victory) {
      setModalState(true);
    }
  }, [gameState]);

  useEffect(() => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setGameState({...gameState, word: newWord.toUpperCase()});
    console.log(newWord);
    // setGameState({...gameState, word: "ASSAY"});

  }, [])

  return (
    <>
      <h1>Word Thing</h1>
      <button onClick={ () => { setModalState(true); } }>Open Modal</button>
      <div className="game-wrap">
        {
          gameState.history.map((item, i) => {
            return <PastEntry key={ i } entry={ item }/>
          })
        }
        {
          ( gameState.victory ? <NewGame resetGame={ resetGame }/>  : <NewEntry words={ words } processEntry={ processEntry }/> )
        }
        <Guesses guessedLetters={ gameState.guessedLetters }/>
      </div>

      <Modal setModalState={ setModalState } modalState={ modalState } id="win-modal">
        <WinModal win={ gameState.victory } history={ gameState.history } word={gameState.word} setModalState={ setModalState } resetGame={ resetGame }/>
      </Modal>

    </>
  );
}

export default WordThing;