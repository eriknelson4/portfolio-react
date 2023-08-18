export const notes = ['C','C♯/D♭','D','D♯/E♭','E','F','F♯/G♭','G','G♯/A♭','A','A♯/B♭','B'];

export const scales = {
  'maj': {
    name:'Major',
    formula: [0,2,4,5,7,9,11]
  },
  'min': {
    name:'Minor/Aeolian',
    formula: [0,2,3,5,7,8,10]
  },
  'harm-min': {
    name:'Harmonic Minor',
    formula: [0,2,3,5,7,8,11]
  },
  'dorian': {
    name:'Dorian',
    formula: [0,2,3,5,7,9,10]
  },
  'phrygian': {
    name:'Phrygian',
    formula: [0,1,3,5,7,8,10]
  },
  'lydian': {
    name:'Lydian',
    formula: [0,2,4,6,7,9,11]
  },
  'mixolydian': {
    name:'Mixolydian',
    formula: [0,2,4,5,7,9,10]
  },
  'locrian': {
    name:'Locrian',
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
