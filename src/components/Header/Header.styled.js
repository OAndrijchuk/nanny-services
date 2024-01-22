import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: ${props => (props.$BGColor ? 'relative' : 'absolute')};
  top: 0;
  left: 0;
  padding: 30px 96px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(251, 251, 251, 0.4);
  background-color: ${props =>
    props.$BGColor ? ({ theme }) => theme.background.main : 'tranparent'};
  z-index: 1;

  @media screen and (max-width: 1124px) {
    padding: 30px 48px;
  }
  @media screen and (max-width: 480px) {
    padding: 30px 24px;
  }
`;

export const NavListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
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
  &.active {
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.lightText};
      border-radius: 100%;
      position: absolute;
      top: calc(100% + 4px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
export const LogoStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: 'HelveticaNeue-500', sans-serif;
  /* font-size: 24px; */
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17; /* 125% */
  letter-spacing: -0.48px;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.greyText};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  margin-right: 96px;

  @media screen and (max-width: 1124px) {
    margin-right: 24px;
  }
`;
export const BurgerMenuButton = styled.button`
  width: 50px;
  height: 50px;
  display: none;
  color: ${({ theme }) => theme.colors.lightText};
  transition: ${({ theme }) => theme.transition};
  & svg {
    fill: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.greyText};
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
