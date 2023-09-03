import { useEffect, useRef } from 'react';

const renderChart = (stats, canvasWrap) => {
  const percentage = stats.win / (stats.win + stats.lose);
  const angle = (2 * Math.PI * percentage);
  const startAngle = (-0.5 * Math.PI);

  const chartCTX = canvasWrap.current.children[0].getContext('2d');
  const { width } = canvasWrap.current.getBoundingClientRect();

  chartCTX.canvas.height = width;
  chartCTX.canvas.width = width;
  const center = width / 2;
  const radius = width * 0.45;

  chartCTX.moveTo(center, center);
  chartCTX.beginPath();
  chartCTX.fillStyle = '#888';
  chartCTX.arc(center, center, radius, 0, 2 * Math.PI, false);
  chartCTX.fill();
  chartCTX.closePath();

  chartCTX.moveTo(center, center);
  chartCTX.beginPath();
  chartCTX.fillStyle = 'rgb(98, 216, 98)';
  chartCTX.arc(center, center, radius, startAngle, startAngle + angle, false);
  chartCTX.lineTo(center, center);
  chartCTX.fill();
  chartCTX.closePath();
}

const updateLocalStorage = (win, history, word) => {
  let pastHistory = JSON.parse(localStorage.getItem('wordthing'));
  if (!pastHistory) { pastHistory = []};
  const newItem = {
    win: win,
    history: [...history],
    word: word
  }
  pastHistory.push(newItem);
  localStorage.setItem('wordthing', JSON.stringify(pastHistory));
}

function WinModal({ win, history, word, setModalState, resetGame }) {

  const canvasWrap = useRef(null);

  if (win !== null) {
    updateLocalStorage(win, history, word);
  }

  const handleReset = () => {
    setModalState(false);
    resetGame();
  }

  useEffect(() => {
    let stats = {
      win: 20,
      lose: 8
    }

    renderChart(stats, canvasWrap);

  }, [history])

  return (
    <>
      <h2>You Won!</h2>
      <div className="results-wrap">
        <div className="game-results">
        {
          history.map((word) => {
            return (
              <div className="word">
                {
                  word.map((char) => {
                    return <span className={`block state-${char[1]}`}>&nbsp;</span>
                  })
                }
              </div>
            )
          })
        }
        </div>
        <div ref={ canvasWrap } className="win-percentage">
          <canvas>

          </canvas>
        </div>
      </div>
      <button className="reset-button" onClick={ handleReset }>New Game</button>
    </>
  );
}

export default WinModal;