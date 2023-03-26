import { useUI } from '../../Context/UIContext';
import { IoMdCloseCircle } from 'react-icons/io';
import './Modal.scss';

export const Modal = ({ id, children }) => {
  const { currentModal, handleModal, getInitial } = useUI();
  const initial = getInitial(id);

  return (
    <aside className="modal modal-item" data-initial={ initial } id={ id } role="dialog" aria-hidden={ currentModal == id ? false : true }>
      <button className="modal-close" onClick={(e) => { handleModal(id); } }><IoMdCloseCircle /></button>
      <div className="modal-content">
        { children }
      </div>
    </aside>
  )
}