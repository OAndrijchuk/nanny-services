import { useDispatch, useSelector } from 'react-redux';
import {
  AuthButtonsContainer,
  BurgerMenuContainer,
  ButtonsContainer,
  CloseButton,
  Nav,
  NavLinkStyle,
  NavListStyle,
} from './BurgerMenu.styled';
import { getIsModalOpen } from '../../redux/Global/selectors';
import { useState } from 'react';
import { openModal } from '../../redux/Global/globalSlice';
import UserInfo from '../UserInfo/UserInfo';
import TransparentBtn from '../TransparentBtn/TransparentBtn';
import Modal from '../Modal/Modal';
import LogInForm from '../LogInForm/LogInForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import ActionConfirmation from '../ActionConfirmation/ActionConfirmation';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import { getOut } from '../../redux/auth/operations';

const BurgerMenu = ({ toggleMenu, isOpen }) => {
  const isModalOpen = useSelector(getIsModalOpen);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');
  const openLogInModal = () => {
    setModalType('logIn');
    dispatch(openModal());
    toggleMenu();
  };
  const openRegistrationModal = () => {
    setModalType('registration');
    dispatch(openModal());
    toggleMenu();
  };
  const openLogOutnModal = () => {
    setModalType('logOut');
    dispatch(openModal());
    toggleMenu();
  };

  return (
    <BurgerMenuContainer $open={isOpen}>
      <CloseButton type="button" onClick={toggleMenu}>
        <SpriteSVG name="close" />
      </CloseButton>
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
          <TransparentBtn type="button" onClick={openRegistrationModal}>
            Registration
          </TransparentBtn>
        </ButtonsContainer>
      )}
      <Nav>
        <NavListStyle>
          <li>
            <NavLinkStyle to="/" onClick={toggleMenu}>
              Home
            </NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle to="/nannies" onClick={toggleMenu}>
              Nannies
            </NavLinkStyle>
          </li>
          {isAuth && (
            <li>
              <NavLinkStyle to="/favorites" onClick={toggleMenu}>
                Favorites
              </NavLinkStyle>
            </li>
          )}
        </NavListStyle>
      </Nav>

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
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
