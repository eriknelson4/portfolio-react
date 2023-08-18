const fifths = document.querySelector('.fifths');
const circle = document.querySelector('.fifths .wrap');
const drag = document.querySelector('#drag-element');
const keys = document.querySelectorAll('.major .key');
const keySelect = document.getElementById('key-select');
const keyButtons = document.querySelectorAll('.key-button');

const circleRadius = document.querySelector('.major .key').offsetHeight;
const circleDiameter = Math.floor(Math.PI * (2 * circleRadius));

const keyArray = ['C','G','D','A','E','B','Gb/F#','Db/C#', 'Ab','Eb','Bb','F']

let index = 0;

let startX = 0;
let currentRotation = 0;
let newRotation = 0;

const settleRotation = () => {
  circle.classList.add('settle');
  let newRotation;
  let newIndex = Math.round((currentRotation % 360) / 30);
  if (newIndex < 0) {
    newIndex = 12 + newIndex;
    newRotation = 30 * (12 - newIndex);
  } else {
    newRotation = -1 * (30 * newIndex);
  }
  circle.style.transform = `rotate(${newRotation}deg)`;
  currentRotation = -1 * newRotation;
  index = newIndex;
}

const updateIndex = () => {
  let newIndex = Math.round(((currentRotation + newRotation) % 360) / 30);
  if (newIndex < 0) {
    newIndex = 12 + newIndex;
  }
  if (newIndex == -0) { newIndex = 0; }
  if (newIndex !== index) {
    index = newIndex;
    keys.forEach((el) => { el.classList.remove('active'); });
    document.querySelector(`.major .key:nth-child(${index + 1})`).classList.add('active');
  }
}

const dragHandler = (drag) => {
  switch (drag.type) {
    case 'dragstart':
      startX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
      circle.classList.remove('settle');
      break;
    case 'drag':
      if (drag.event.screenX === 0) { return; };
      const moveX = drag.touch ? drag.event.touches[0].clientX : drag.event.clientX;
      let distance = startX - moveX;
      newRotation = Math.floor(distance / circleDiameter * 360);
      circle.style.transform = `rotate(${(-1 * (currentRotation + newRotation)) % 360}deg)`;
      updateIndex();
      break;
    case 'dragend':
      currentRotation = newRotation + currentRotation;
      settleRotation();
      break;
  }
}

const rotateToIndex = (newIndex) => {
  let newRotation = 30 * newIndex;
  circle.classList.add('settle');
  circle.style.transform = `rotate(${(-1 * newRotation) % 360}deg)`;
  index = newIndex;
  keys.forEach((el) => { el.classList.remove('active'); });
  document.querySelector(`.major .key:nth-child(${index + 1})`).classList.add('active');
}

keyButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    let newIndex = index + (e.currentTarget.classList.contains('left') ? -1 : +1);
    console.log(newIndex);
    rotateToIndex(newIndex);
  });
})

keySelect.addEventListener('change', (e) => {
  const newKey = e.currentTarget.value;
  const newIndex = keyArray.findIndex((el) => el == newKey);
  rotateToIndex(newIndex);
})

// Mouse/Touch drags

drag.addEventListener('drag', (e) => { dragHandler({ type:'drag', touch:false, event: e }); });
drag.addEventListener('dragstart', (e) => { dragHandler({ type:'dragstart', touch:false, event: e })});
drag.addEventListener('dragend', (e) => { dragHandler({ type:'dragend', touch:false, event: e })});

drag.addEventListener('touchmove', (e) => { dragHandler({ type:'drag', touch:true, event: e }); }, { passive: true });
drag.addEventListener('touchstart', (e) => { dragHandler({ type:'dragstart', touch:true, event: e })}, { passive: true });
drag.addEventListener('touchend', (e) => { dragHandler({ type:'dragend', touch:true, event: e })}, { passive: true });