import {
  AuthButtonsContainer,
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
import ActionConfirmation from '../ActionConfirmation/ActionConfirmation';
import UserInfo from '../UserInfo/UserInfo';
// import { db } from '../../firebase';
// import { collection, doc, setDoc } from 'firebase/firestore';
// import { v4 as uuid } from 'uuid';

const Header = ({ BGColor }) => {
  // const nan = useSelector(getNannies);
  const isModalOpen = useSelector(getIsModalOpen);
  const isAuth = useSelector(state => state.auth.isAuth);
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
  const openLogOutnModal = () => {
    setModalType('logOut');
    dispatch(openModal());
  };

  // const addColection = () => {
  //   const collectionRef = collection(db, 'nannies');

  //   nan.forEach(async obj => {
  //     await setDoc(doc(collectionRef, obj.name), obj);
  //     console.log(obj.name);
  //   });
  // };

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
      {/* <ColorBtn type="button" onClick={addColection}>
        addColection
      </ColorBtn> */}
      {isModalOpen && modalType && (
        <Modal>
          {modalType === 'logIn' && <LogInForm />}
          {modalType === 'registration' && <RegistrationForm />}
          {modalType === 'logOut' && <ActionConfirmation />}
        </Modal>
      )}
    </HeaderStyle>
  );
};

export default Header;
