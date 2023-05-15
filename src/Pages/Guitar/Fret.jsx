const notes = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];

const Fret = ({ scale, idx, currentNote }) => {
  let classes = 'fret';
  if (idx == 0) { classes+= ' nut'; }
  if (scale.indexOf(currentNote) > -1) { classes += ' dot'; }
  if (scale.indexOf(currentNote) == 0) { classes += ' root'; }

  return (
    <div className={ classes }>
      <span>{ currentNote }</span>
    </div>
  )
}

export default Fret;