import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCloseCircle } from 'react-icons/io';
import './Modal.scss';

export const Modal = ({ id, children, isOpen, setModalOpen }) => {

  const closeModal = () => {
    setModalOpen(false);
  }
  const modalElement = useRef();

  const bodyClickHandler = (e) => {
    if (e.target.tagName === 'DIALOG') { closeModal(); }
  }

  useEffect(() => {
    const el = modalElement.current;
    if (isOpen) {
      document.getElementById('root').classList.add('modal-open');
      document.querySelector('body').addEventListener('click', bodyClickHandler);
      el.showModal();
    }
    if (isOpen === false) {
      document.getElementById('root').classList.remove('modal-open');
      document.querySelector('body').removeEventListener('click', bodyClickHandler);
      el.close();
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <dialog className="modal modal-item" ref={ modalElement } id={ id } >
      <button className="modal-close" onClick={() => { closeModal(); } }><IoMdCloseCircle /></button>
      <div className="modal-content">
        { children }
      </div>
    </dialog>,
    document.getElementById('modal')
  )
}