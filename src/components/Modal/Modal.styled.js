import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.modalOverlay};
  z-index: 999;
  overflow-y: auto;
`;
export const ModalContainer = styled.div`
  position: relative;
  padding: 64px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.white};
`;
export const ModalContainerScroll = styled.div`
  max-height: 100%;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transition};
  & svg {
    stroke: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.background.main};
  }
`;
