import { useEffect, useRef } from 'react';
import tunings from '../../Data/Tunings';
import { scales, notes } from '../../Data/ScaleLibrary';
import './Controls.scss';

const Controls = ({ tuning, setFretboardStyle, currentRoot, currentScale, shiftTuning, setRoot, setTuning, setScale }) => {

  const rootDropdown = useRef(null);

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

  const rotateToIndex = (index) => {
    console.log(notes[index]);
    const newRotation = -1 * (index * 30);
    circle.current.style.transform = `rotate(${newRotation}deg)`;
    currentRotation = newRotation;
  }

  const updateIndex = () => {
    let newIndex = -1 * Math.round(((currentRotation + newRotation) % 360) / 30);
    if (newIndex < 0) {
      newIndex = 12 + newIndex;
    }
    if (newIndex === -0) { newIndex = 0; }
    if (newIndex !== index) {
      index = newIndex;

      // Update Dropdown
      for (let el of rootDropdown.current.children) { el.removeAttribute('selected'); }
      rootDropdown.current.children[index].setAttribute('selected', 'selected');

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
      case 'touchstart':
        circle.current.classList.remove('settle');
        startX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
        break;
      case 'drag':
      case 'touchmove':
        if (drag.event.screenX === 0) { return; };
        const moveX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
        const distance = (startX - moveX) * 0.15;
        newRotation = (-1 * distance) % 360;
        circle.current.style.transform = `rotate(${currentRotation + newRotation}deg)`;
        updateIndex();
        break;
      case 'dragend':
      case 'touchend':
        currentRotation = newRotation + currentRotation;
        settleRotation();
        break;
    }
  }

  const rootDropdownHandler = () => {
    const newRoot = rootDropdown.current.value;
    const rootIndex = notes.findIndex((val) => { return val == keyArray[newRoot]; });
    rotateToIndex(newRoot);
    setRoot(rootIndex);
    for (let el of major.current.children) { el.classList.remove('active'); }
    major.current.children[newRoot].classList.add('active');
  }

  useEffect(() => {

    // Add drag and touch event listeners

    ['drag', 'dragstart', 'dragend', 'touchmove', 'touchstart', 'touchend'].forEach((eventName) => {
      const touchVal = eventName.indexOf('touch') == 0 ? true : false;
      dragEl.current.addEventListener(eventName, (e) => {
        dragHandler({ type:eventName, touch:touchVal, event:e });
      }, { passive:true });
    })

    // Cleanup

    return () => {
      // ['drag', 'dragstart', 'dragend', 'touchmove', 'touchstart', 'touchend'].forEach((eventName) => {
      //   dragEl.current.removeEventListener(eventName);
      // });
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

      <div className="control root-dropdown">
        <label htmlFor="root-dropdown">Root</label>
        <select onClick={ rootDropdownHandler } ref={ rootDropdown } name="root-dropdown" id="root-dropdown">
          <option value="0">C</option>
          <option value="1">G</option>
          <option value="2">D</option>
          <option value="3">A</option>
          <option value="4">E</option>
          <option value="5">B/C&#x266d;</option>
          <option value="6">G&#x266d;/F&#x266f;</option>
          <option value="7">D&#x266d;/C&#x266f;</option>
          <option value="8">A&#x266d;</option>
          <option value="9">E&#x266d;</option>
          <option value="10">B&#x266d;</option>
          <option value="11">F</option>
        </select>
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