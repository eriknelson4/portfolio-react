import { useUI } from '../../Context/UIContext';
import './ModalScreen.scss';

export const ModalScreen = () => {
  const { currentModal, closeAllModals, screenInitial } = useUI();

  return (
    <div onClick={(e) => { closeAllModals(); } } className="modal-screen" data-initial={ screenInitial } aria-hidden={ currentModal == null ? true : false }></div>
  )
}