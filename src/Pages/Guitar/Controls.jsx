import tunings from '../../Data/Tunings';
import { scales, notes } from '../../Data/scales';

const Controls = ({ tuning, shiftTuning, setRoot, setTuning, setScale }) => {
  return (
    <div className="controls">
      <div className="control">
        <label htmlFor="scale-root">Root</label>
        <select id="scale-root" onChange={ (e) => { setRoot(parseInt(e.target.value)); } } className="root-selector">
          {
            notes.map((note, i) => {
              return (
                <option key={ i } value={ i }>{ note }</option>
              )
            })
          }
        </select>
      </div>

      <div className="control">
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

      <div className="control">
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

      <div className="control">
        <label htmlFor="tuning-type">Custom Tuning</label>
        <div className="guitar-tuner">
          {
            tuning.map((note, i) => {
              return (
                <div className="peg">
                  <button onClick={ (e) => { shiftTuning((tuning.length - 1) - i, -1) } }>-</button>
                  <span>{ note }</span>
                  <button onClick={ (e) => { shiftTuning((tuning.length - 1) - i, 1) } }>+</button>
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