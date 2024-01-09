import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  CloseButton,
  ModalContainer,
  ModalContainerScroll,
  ModalOverlay,
} from './Modal.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/Global/globalSlice';
import { SpriteSVG } from '../../assets/images/SpriteSVG';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
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
      <ModalContainerScroll>
        <ModalContainer>
          <CloseButton type="button" onClick={() => dispatch(closeModal())}>
            <SpriteSVG name="close" />
          </CloseButton>
          {children}
        </ModalContainer>
      </ModalContainerScroll>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
