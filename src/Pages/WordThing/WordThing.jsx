import { useState, useRef, useEffect } from 'react';
import { Modal } from '../../Components/Modals/Modal';
import WinModal from './WinModal';
import words from './words5.json';
import './WordThing.scss';
import PastEntry from './PastEntry';
import NewEntry from './NewEntry';
import NewGame from './NewGame';

const defaultState = {
  word: null,
  turn:0,
  turnLimit:6,
  history:[],
  victory: false
}

function WordThing() {
  const [ currentModal, setCurrentModal ] = useState('');
  const [ isModalOpen, setIsModalOpen ] = useState(null);

  useEffect((val) => {
    setIsModalOpen(val);
  }, [isModalOpen])

  const openWinModal = (id) => {
    setCurrentModal({ ...portfolioItems[id] });
    setIsModalOpen(true);
  }


  const [gameState, setGameState] = useState({... defaultState });

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

    console.log(history);

    let newHistory = [...gameState.history, history];
    setGameState({
      ...gameState,
      history: newHistory,
      victory: (gameState.word === newEntry)
    });
  }

  useEffect(() => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setGameState({...gameState, word: newWord.toUpperCase()});
    console.log(newWord);
    // setGameState({...gameState, word: "ASSAY"});

  }, [])

  return (
    <>
      <h1>Word Thing</h1>
      <div className="game-wrap">
        {
          gameState.history.map((item, i) => {
            return <PastEntry key={ i } entry={ item }/>
          })
        }
        {
          ( gameState.victory ? <NewGame resetGame={ resetGame }/>  : <NewEntry words={ words } processEntry={ processEntry }/> )
        }
      </div>

      <Modal isOpen={ isModalOpen } setModalOpen={ setIsModalOpen } id="portfolio-modal">
        <WinModal currentModal={ currentModal }/>
      </Modal>
    </>
  );
}

export default WordThing;