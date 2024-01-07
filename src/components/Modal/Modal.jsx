import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseButton, ModalContainer, ModalOverlay } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/Global/globalSlice';
import { SpriteSVG } from '../../assets/images/SpriteSVG';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          dispatch(closeModal());
        }
      }}
    >
      <ModalContainer>
        <CloseButton type="button" onClick={() => dispatch(closeModal())}>
          <SpriteSVG name="close" />
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
