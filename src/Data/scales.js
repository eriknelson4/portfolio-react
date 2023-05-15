export const notes = ['C','C♯/D♭','D','D♯/E♭','E','F','F♯/G♭','G','G♯/A♭','A','A♯/B♭','B'];

export const scales = {
  'maj': {
    name:'Major',
    formula: [0,2,4,5,7,9,11]
  },
  'min': {
    name:'Minor/Aeolian [Major 6]',
    formula: [0,2,3,5,7,8,10]
  },
  'harm-min': {
    name:'Harmonic Minor',
    formula: [0,2,3,5,7,8,11]
  },
  'dorian': {
    name:'Dorian [Major 2]',
    formula: [0,2,3,5,7,9,10]
  },
  'phrygian': {
    name:'Phrygian [Major 3]',
    formula: [0,1,3,5,7,8,10]
  },
  'lydian': {
    name:'Lydian [Major 4]',
    formula: [0,2,4,6,7,9,11]
  },
  'mixolydian': {
    name:'Mixolydian [Major 5]',
    formula: [0,2,4,5,7,9,10]
  },
  'locrian': {
    name:'Locrian [Major 7]',
    formula: [0,1,3,5,6,8,10]
  },
  'maj-pent': {
    name:'Major Pentatonic',
    formula: [0,2,4,7,9]
  },
  'min-pent': {
    name:'Minor Pentatonic',
    formula: [0,3,5,7,10]
  }
}
