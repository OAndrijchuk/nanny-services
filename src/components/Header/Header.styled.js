import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: ${props => (props.$BGColor ? 'relative' : 'absolute')};
  top: 0;
  left: 0;
  padding: 30px 96px;
  /* padding-left: calc((1vh + 1vw) * 4.2);
  padding-right: calc((1vh + 1vw) * 4.2); */
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(251, 251, 251, 0.4);
  background-color: ${props =>
    props.$BGColor ? ({ theme }) => theme.background.main : 'tranparent'};
`;

export const NavListStyle = styled.header`
  display: flex;
  align-items: center;
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
`;

export const Nav = styled.nav`
  margin-left: auto;
  margin-right: 96px;
`;
