import {
  ButtonsContainer,
  HeaderStyle,
  LogoStyle,
  Nav,
  NavLinkStyle,
  NavListStyle,
} from './Header.styled';
import TransparentBtn from '../TransparentBtn/TransparentBtn';
import ColorBtn from '../ColorBtn/ColorBtn';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getIsModalOpen } from '../../redux/Global/selectors';
import { openModal } from '../../redux/Global/globalSlice';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LogInForm from '../LogInForm/LogInForm';
import { useState } from 'react';

const Header = ({ BGColor }) => {
  const isModalOpen = useSelector(getIsModalOpen);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');
  const openLogInModal = () => {
    setModalType('logIn');
    dispatch(openModal());
  };
  const openRegistrationModal = () => {
    setModalType('registration');
    dispatch(openModal());
  };
  return (
    <HeaderStyle $BGColor={BGColor}>
      <LogoStyle to="/">Nanny.Services</LogoStyle>
      <Nav>
        <NavListStyle>
          <li>
            <NavLinkStyle to="/">Home</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to="/nannies">Nannies</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>
          </li>
        </NavListStyle>
      </Nav>
      <ButtonsContainer>
        <TransparentBtn type="button" onClick={openLogInModal}>
          Log In
        </TransparentBtn>
        {!BGColor ? (
          <ColorBtn type="button" onClick={openRegistrationModal}>
            Registration
          </ColorBtn>
        ) : (
          <TransparentBtn type="button" onClick={openRegistrationModal}>
            Registration
          </TransparentBtn>
        )}
      </ButtonsContainer>
      {isModalOpen && modalType && (
        <Modal>
          {modalType === 'logIn' && <LogInForm />}
          {modalType === 'registration' && <RegistrationForm />}
        </Modal>
      )}
    </HeaderStyle>
  );
};

export default Header;
