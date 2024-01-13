import {
  AuthButtonsContainer,
  BurgerMenuButton,
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
import { openMobileMenu, openModal } from '../../redux/Global/globalSlice';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LogInForm from '../LogInForm/LogInForm';
import { useState } from 'react';
import ActionConfirmation from '../ActionConfirmation/ActionConfirmation';
import UserInfo from '../UserInfo/UserInfo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import { getOut } from '../../redux/auth/operations';

const Header = ({ BGColor }) => {
  const isModalOpen = useSelector(getIsModalOpen);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isMobileMenuOpen = useSelector(state => state.global.isMobileMenuOpen);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');

  const toggleMobileMenu = () => {
    dispatch(openMobileMenu(!isMobileMenuOpen));
  };

  const openLogInModal = () => {
    setModalType('logIn');
    dispatch(openModal());
  };
  const openRegistrationModal = () => {
    setModalType('registration');
    dispatch(openModal());
  };
  const openLogOutnModal = () => {
    setModalType('logOut');
    dispatch(openModal());
  };
  return (
    <HeaderStyle $BGColor={BGColor}>
      <LogoStyle to="/">Nanny.Services</LogoStyle>
      <BurgerMenu toggleMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      <Nav>
        <NavListStyle>
          <li>
            <NavLinkStyle to="/">Home</NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to="/nannies">Nannies</NavLinkStyle>
          </li>
          {isAuth && (
            <li>
              <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>
            </li>
          )}
        </NavListStyle>
      </Nav>
      {isAuth ? (
        <AuthButtonsContainer>
          <UserInfo />
          <TransparentBtn type="button" onClick={openLogOutnModal}>
            Log out
          </TransparentBtn>
        </AuthButtonsContainer>
      ) : (
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
      )}
      <BurgerMenuButton type="button" onClick={toggleMobileMenu}>
        <SpriteSVG name="burger-menu" />
      </BurgerMenuButton>
      {isModalOpen && modalType && (
        <Modal>
          {modalType === 'logIn' && <LogInForm />}
          {modalType === 'registration' && <RegistrationForm />}
          {modalType === 'logOut' && (
            <ActionConfirmation
              text="Are you sure you want to exit?"
              actionFunc={getOut}
            />
          )}
        </Modal>
      )}
    </HeaderStyle>
  );
};

export default Header;
