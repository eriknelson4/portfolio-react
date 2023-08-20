import { useState, useEffect } from 'react';
import String from './String';
import Controls from './Controls';
import Standard from '../../Templates/Standard';
import tunings from '../../Data/Tunings';
import { scales, notes } from '../../Data/ScaleLibrary';
import { Modal } from '../../Components/Modals/Modal';
import { BsFillGearFill } from 'react-icons/bs';

import './Guitar.scss';

const Guitar = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(null);
  const [ frets, setFrets ] = useState(24);
  const [ tuning, setTuning ] = useState(tunings['std-6'].formula);
  const [ scale, setScale ] = useState('maj');
  const [ root, setRoot ] = useState(0);
  const [ userScale, setUserScale ] = useState(['C','D','E','F','G','A','B']);
  const [ fretboardStyle, setFretboardStyle] = useState('linear');
  let markerType = 'numbers';

  const shiftTuning = (string, offset) => {
    let newTuning = [...tuning];
    const currentString = (tuning.length - 1) - string;
    let newNote = notes.indexOf(tuning[currentString]) + offset;
    if (newNote > notes.length - 1) { newNote = 0; }
    if (newNote < 0) { newNote = notes.length - 1; }
    newTuning[currentString] = notes[newNote];
    setTuning([...newTuning]);
  }

  useEffect((val) => {
    setIsModalOpen(val);
  }, [isModalOpen])

  useEffect(() => {
    let startScale = scales[scale].formula;
    let newUserScale = [];
    for (let i = 0; i < startScale.length; i++) {
      let index = (root + startScale[i]) % 12;
      newUserScale.push(notes[index]);
    }
    setUserScale(newUserScale);
  }, [root, scale]);

  return (
    <>
      <Standard>
        <div className={ `guitar ${fretboardStyle}` }>
          <h1>Guitar <button onClick={ () => { setIsModalOpen(true); } } ><BsFillGearFill/></button></h1>

          <h2>{ notes[root] } { scales[scale].name }</h2>

          <div className="fret-markers">
            {[...Array(26)].map((x, i) =>
              <div key={ i } className="marker">
                {
                  <span>{ (i - 1) > 0 ? (i - 1) : null }</span>
                }
              </div>
            )}
          </div>

          <div className="neck">
          {
            tuning.slice(0).reverse().map((note, i) => {
              return (
                <String
                  key={ i }
                  string={ i }
                  scale ={ userScale }
                  shiftTuning={ shiftTuning }
                  note={ note }
                  frets={ frets }
                  tuning={ tuning }
                  setTuning={ setTuning }
                />
              )
            })
          }
          </div>

          <div className="fret-dots">
            {[...Array(26)].map((x, i) =>
              [4, 6, 8, 10, 13, 16, 18, 20, 22, 25].indexOf(i) >= 0 ? <div key={ i } className="fret-dot dot"></div> : <div key={ i } className="fret-dot"></div>
            )}
          </div>

        </div>
      </Standard>

      <Modal isOpen={ isModalOpen } setModalOpen={ setIsModalOpen } id="controls-modal">
        <Controls
            tuning = { tuning }
            setFretboardStyle = { setFretboardStyle }
            shiftTuning = { shiftTuning }
            currentRoot = { notes[root] }
            currentScale = { scales[scale].name }
            setTuning = { setTuning }
            setScale = { setScale }
            setRoot = { setRoot }
          />
      </Modal>
    </>
  )

}

export default Guitar;