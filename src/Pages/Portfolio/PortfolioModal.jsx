import { useState } from 'react';
import './PortfolioModal.scss';
import { BiLinkExternal } from 'react-icons/bi';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const PortfolioModal = ({ currentModal }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  let maxImageIndex = 0;
  if (currentModal) {
    maxImageIndex = currentModal.images.length - 1;
    if (currentIndex > maxImageIndex) {
      setCurrentIndex(0);
    }
  }

  const updateIndex = (increment) => {
    let newIndex = currentIndex + increment;
    if (newIndex < 0) { newIndex = maxImageIndex - 1; }
    if (newIndex > maxImageIndex - 1) { newIndex = 0; }
    setCurrentIndex(newIndex);
  }

  if (typeof currentModal == 'object') {
    maxImageIndex = currentModal.images.length;
    return (
      <>
        <div className="project-browser">
          {
            currentModal.images.length > 1 ?
              <>
                <button
                  onClick={ () => { updateIndex(-1) } }
                  className="prev">
                  <GrFormPrevious/>
                </button>
                <button
                  onClick={ () => { updateIndex(1) } }
                  className="next">
                  <GrFormNext/>
                </button>
              </>
              :
              null
          }

          {
            currentModal.images.map((image, i) => (
              <img
                key={ `image-${ i }` }
                loading="lazy"
                aria-hidden={ i == currentIndex ? false : true }
                src={ image }
                alt={ `${ currentModal.title } - image ${ i }` }
              />
            ))
          }
        </div>
        <div className="project-info">
          <div className="link">
            <a
              href={ currentModal.url }
              target="_blank"
              className="href">
              <BiLinkExternal />
            </a>
          </div>
          <div className="copy">
            <p className="title">{ currentModal.title }</p>
            <p className="tech">{ currentModal.description }</p>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }

}

export default PortfolioModal;