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

const Header = () => {
  const isRegistration = useSelector(getIsModalOpen);
  const dispatch = useDispatch();
  return (
    <HeaderStyle>
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
        <TransparentBtn type="button">Log In</TransparentBtn>
        <ColorBtn type="button" onClick={() => dispatch(openModal())}>
          Registration
        </ColorBtn>
      </ButtonsContainer>
      {isRegistration && <Modal>Make Life Easier for the Family:</Modal>}
    </HeaderStyle>
  );
};

export default Header;
