class FW {

  settleRotation = () => {
    circle.current.classList.add('settle');
    let settledRotation = -1 * (index * 30);
    const distance = Math.abs(settledRotation - currentRotation);
    if (distance > 180) { settledRotation += 360; }
    circle.current.style.transform = `rotate(${settledRotation}deg)`;
    currentRotation = settledRotation;
  }

  updateIndex = () => {
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

  dragHandler = (drag) => {
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
}

export default FW;