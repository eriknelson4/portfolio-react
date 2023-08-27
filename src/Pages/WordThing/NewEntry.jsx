import { useState, useEffect, useRef } from 'react';

function NewEntry({ processEntry, words }) {

  const [validState, setValidState] = useState([false, false, false, false, false]);
  const [submitActive, setSubmitActive] = useState(false);
  const [currentWord, setCurrentWord] = useState(new Array(5).fill(' '));
  const [turn, setTurn] = useState(0);

  const entryRef = useRef(null);
  const submitEntryButton = useRef(null);

  const validate = (id, e) => {

    let allValid = true;

    // set state for individual character fields

    const char = e.currentTarget.value;
    const valid  = char.match(/[a-z|A-Z]/i) === null ? false : true;
    let newState = [...validState];
    newState[id] = valid;
    if (!valid) { allValid = false; }
    setValidState([...newState]);

    // Is new entry legit

    // Update state for the current word

    const newWord = [...currentWord];
    newWord[id] = char;
    setCurrentWord([...newWord]);

    // Set submit button state

    if (!validState.indexOf(false) < 0 && id + 1 <= validState.length - 1) { allValid = false; }
    setSubmitActive(allValid);

    if (valid && id + 1 <= validState.length - 1) {
      entryRef.current.children[id + 1].focus();
    }
  }

  const handleSubmitEntry = () => {
    processEntry(currentWord.join('').toUpperCase());
    setTurn(turn + 1);
    const newValidState = new Array(5).fill(false);
    setValidState(newValidState);
  }

  useEffect(() => {
    for (let item of entryRef.current.children) {
      if (item.type === 'text') {
        item.value = '';
      }
    }
    entryRef.current.children[0].focus();
  }, [turn])

  useEffect(() => {
    entryRef.current.children[0].focus();
  }, [])

  return (
    <div ref={ entryRef } className="new-entry">
      {
        Array(5).fill(0).map((_, i) => {
          return <input key={ i } turn={ turn } onChange={ (e) => { validate(i, e); } } className={ validState[i] == true ? 'valid' : 'invalid' } maxLength="1" type="text"/>
        })
      }
      <button ref={ submitEntryButton } disabled={ !submitActive } onClick={ (e) => { handleSubmitEntry() } } className="submit-entry"><span>&raquo;</span></button>
    </div>
  );
}

export default NewEntry;