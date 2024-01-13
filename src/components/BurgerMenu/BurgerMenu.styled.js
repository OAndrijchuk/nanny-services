import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ $open }) => ($open ? `translateY(0)` : `translateY(-100%)`)};
  background-color: ${({ theme }) => theme.background.main};
  transition: ${({ theme }) => theme.transition};

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const NavListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const NavLinkStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: 'HelveticaNeue-400', sans-serif;
  font-size: 16px;
  /* font-size: 1rem; */
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
  letter-spacing: -0.16px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.greyText};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 50px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightText};
  transition: ${({ theme }) => theme.transition};
  & svg {
    stroke: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.greyText};
  }
`;
