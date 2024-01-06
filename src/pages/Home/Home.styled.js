import styled from 'styled-components';
import BG from '../../assets/images/homeBG/BG.jpg';
import BG_2x from '../../assets/images/homeBG/BG@2x.jpg';
import { ContainerStyle } from '../../styles/GlobalComponentsStyled/ContainerStyle';
import { SectionStyle } from '../../styles/GlobalComponentsStyled/Section';

export const HomeContainer = styled(ContainerStyle)`
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 64px);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.background.main};
`;
export const HomeSection = styled(SectionStyle)`
  padding: 32px;
`;
export const HomeTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 28px;
  padding-left: 96px;
  padding-right: 68px;
  margin-top: 88px;
`;

export const HomeTitle = styled.h1`
  font-family: 'HelveticaNeue-500';
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px; /* 100% */
  letter-spacing: -2.1px;
`;
export const HomeTitleText = styled.p`
  font-family: 'HelveticaNeue-500';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.07; /* 100% */
  letter-spacing: -0.56px;
  margin-bottom: 28px;
`;

export const BGImageStyle = styled.div`
  background-image: url(${BG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 30px 30px 0;
  width: 50%;
  min-height: 100%;
  background-color: lightgrey;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BG_2x});
  }
`;
