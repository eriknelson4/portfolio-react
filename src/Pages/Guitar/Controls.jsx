import { useEffect, useRef } from 'react';
import tunings from '../../Data/Tunings';
// import { settleRotation, updateIndex, dragHandler} from './keywheel';
import { scales, notes } from '../../Data/scales';
import './Controls.scss';

const Controls = ({ tuning, setFretboardStyle, currentRoot, currentScale, shiftTuning, setRoot, setTuning, setScale }) => {

console.log(currentRoot);

  const dragEl = useRef(null);
  const circle = useRef(null);
  const major = useRef(null);
  const keyArray = ['C','G','D','A','E','B','F♯/G♭','C♯/D♭', 'G♯/A♭','D♯/E♭','A♯/B♭','F'];

  let index = 0;
  let startX;
  let currentRotation = 0;
  let newRotation;

  const settleRotation = () => {
    circle.current.classList.add('settle');
    let settledRotation = -1 * (index * 30);
    const distance = Math.abs(settledRotation - currentRotation);
    if (distance > 180) { settledRotation += 360; }
    circle.current.style.transform = `rotate(${settledRotation}deg)`;
    currentRotation = settledRotation;
  }

  const updateIndex = () => {
    let newIndex = -1 * Math.round(((currentRotation + newRotation) % 360) / 30);
    if (newIndex < 0) {
      newIndex = 12 + newIndex;
    }
    if (newIndex === -0) { newIndex = 0; }
    if (newIndex !== index) {
      index = newIndex;

      // Convert from Circle of Fifths to Chromatic
      const rootIndex = notes.findIndex((val) => { return val == keyArray[index]; });

      for (let el of major.current.children) { el.classList.remove('active'); }
      major.current.children[index].classList.add('active');
      setRoot(rootIndex);
    }
  }

  const dragHandler = (drag) => {
    switch (drag.type) {
      case 'dragstart':
        circle.current.classList.remove('settle');
        startX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
        break;
      case 'drag':
        if (drag.event.screenX === 0) { return; };
        const moveX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
        const distance = (startX - moveX) * 0.15;
        newRotation = (-1 * distance) % 360;
        circle.current.style.transform = `rotate(${currentRotation + newRotation}deg)`;
        updateIndex();
        break;
      case 'dragend':
        currentRotation = newRotation + currentRotation;
        settleRotation();
        break;
    }
  }

  useEffect(() => {

    dragEl.current.addEventListener('drag', (e) => { dragHandler({ type:'drag', touch:false, event: e }); });
    dragEl.current.addEventListener('dragstart', (e) => { dragHandler({ type:'dragstart', touch:false, event: e })});
    dragEl.current.addEventListener('dragend', (e) => { dragHandler({ type:'dragend', touch:false, event: e })});
    dragEl.current.addEventListener('touchmove', (e) => { dragHandler({ type:'drag', touch:true, event: e }); }, { passive: true });
    dragEl.current.addEventListener('touchstart', (e) => { dragHandler({ type:'dragstart', touch:true, event: e })}, { passive: true });
    dragEl.current.addEventListener('touchend', (e) => { dragHandler({ type:'dragend', touch:true, event: e })}, { passive: true });

    // Cleanup

    return () => {
      // window.removeEventListener('keydown', handleKeyDown);
    };

  }, [])

  return (
    <div className="controls">

      <div className="control state">
        <h2>{ currentRoot } { currentScale }</h2>
      </div>

      <div className="control root">
        <div className="half-wrap">
          <div ref={ dragEl } id="drag-element" draggable="true"></div>
          <div className="fifths">
            <div ref={ circle } className="wrap">
              <div className="border major-border">
                <div ref={ major } className="major">
                  <div className="key active"><span>C</span></div>
                  <div className="key"><span>G</span></div>
                  <div className="key"><span>D</span></div>
                  <div className="key"><span>A</span></div>
                  <div className="key"><span>E</span></div>
                  <div className="key"><span>B/C&#x266d;</span></div>
                  <div className="key"><span>G&#x266d;/F&#x266f;</span></div>
                  <div className="key"><span>D&#x266d;/C&#x266f;</span></div>
                  <div className="key"><span>A&#x266d;</span></div>
                  <div className="key"><span>E&#x266d;</span></div>
                  <div className="key"><span>B&#x266d;</span></div>
                  <div className="key"><span>F</span></div>
                </div>
              </div>
              <div className="border minor-border">
                <div className="minor">
                  <div className="key"><span>Am</span></div>
                  <div className="key"><span>Em</span></div>
                  <div className="key"><span>Bm</span></div>
                  <div className="key"><span>F&#x266f;m</span></div>
                  <div className="key"><span>C&#x266f;m</span></div>
                  <div className="key"><span>G&#x266f;m</span></div>
                  <div className="key"><span>E&#x266d;m</span></div>
                  <div className="key"><span>B&#x266d;m</span></div>
                  <div className="key"><span>Fm</span></div>
                  <div className="key"><span>Cm</span></div>
                  <div className="key"><span>Gm</span></div>
                  <div className="key"><span>Dm</span></div>
                </div>
              </div>
            </div>
            <div className="border inner-border">
              <button className="key-button left">&laquo;</button>
              <button className="key-button right"></button>
            </div>
          </div>
        </div>
      </div>

      <div className="control scale">
        <label htmlFor="scale-type">Scale</label>
        <select id="scale-type" onChange={ (e) => { setScale(e.target.value) } } className="scale-selector">
          {
            Object.entries(scales).map((scale, i) => {
              return (
                <option key={ i } value={ scale[0] }>{ scale[1].name }</option>
              )
            })
          }
        </select>
      </div>

      <div className="control tuning">
        <label htmlFor="tuning-type">Tuning</label>
        <select id="tuning-type" onChange={ (e) => { setTuning(tunings[e.target.value].formula) } } className="tuning-selector">
          {
            Object.entries(tunings).map((tuning, i) => {
              return (
                <option key={ i } value={ tuning[0] }>{ tuning[1].name }</option>
              )
            })
          }
        </select>
      </div>

      <div className="control fretboard-style">
        <label htmlFor="fretboard">Fretboard Style</label>
        <select id="fretboard" onChange={ (e) => { setFretboardStyle(e.target.value) } } >
          <option value="linear">Linear</option>
          <option value="log">Logarithmic</option>
        </select>
      </div>

      <div className="control custom-tuning">
        <label htmlFor="tuning-type">Custom Tuning</label>
        <div className="guitar-tuner">
          {
            tuning.map((note, i) => {
              return (
                <div className="peg">
                  <button onClick={ (e) => { shiftTuning((tuning.length - 1) - i, 1) } }><span>+</span></button>
                  <span>{ note }</span>
                  <button onClick={ (e) => { shiftTuning((tuning.length - 1) - i, -1) } }><span>-</span></button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Controls;