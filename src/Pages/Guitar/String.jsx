import { useState, useEffect } from 'react';
import Fret from './Fret';
import { notes } from '../../Data/ScaleLibrary';

const String = ({ scale, note, frets }) => {
  const [ stringArray, setStringArray ] = useState([]);
  const stringRoot = notes[notes.indexOf(note)];
  useEffect(() => {
    let newStringArray = [];
    let startNote = notes.indexOf(note);
    for (let i = 0; i <= frets; i++) {
      const newNote = notes[(startNote + i) % 12];
      newStringArray.push(newNote);
    }
    setStringArray([...newStringArray]);
  }, [note]);

  return (

    <div className="string">
      <span className="string-root">{ stringRoot }</span>
      {
        stringArray.map((currentNote, idx) => {
          return (
            <Fret
              scale={ scale }
              key={ idx }
              idx={ idx }
              currentNote={ currentNote }
            />
          )
        })
      }
    </div>

  )
}

export default String;