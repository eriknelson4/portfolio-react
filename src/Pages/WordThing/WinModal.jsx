function WinModal({ setModalState, resetGame }) {

  const handleReset = () => {
    setModalState(false);
    resetGame();
  }

  return (
    <button onClick={ handleReset }>New Game</button>
  );
}

export default WinModal;