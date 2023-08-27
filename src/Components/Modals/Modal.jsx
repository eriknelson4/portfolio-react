import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCloseCircle } from 'react-icons/io';
import './Modal.scss';

function Modal({id, modalState, setModalState, children}) {

  const modalDialog = useRef(null);

  useEffect(() => {
    if (modalState) {
      modalDialog.current.showModal();
      document.getElementById('root').classList.add('modal-open');
      document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.tagName === 'DIALOG') { setModalState(false); }
      })
    } else {
      modalDialog.current.close();
      document.getElementById('root').classList.remove('modal-open');
    }
  });

  return ReactDOM.createPortal(
    <dialog className="modal" ref={ modalDialog } id={ id } >
      <button onClick={ () => { setModalState(false) } } className="modal-close"><IoMdCloseCircle /></button>
      <div className="modal-content">
        { children }
      </div>
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal;
