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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding-left: 40px;
    padding-right: 68px;
    gap: 8px;
  }
`;

export const HomeTitle = styled.h1`
  font-family: 'HelveticaNeue-500';
  font-size: 4.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1; /* 100% */
  letter-spacing: -2.1px;
`;
export const HomeTitleText = styled.p`
  font-family: 'HelveticaNeue-500';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.07; /* 100% */
  letter-spacing: -0.56px;
  margin-bottom: 28px;
`;

export const BGImageStyle = styled.div`
  position: relative;
  background-image: url(${BG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 30px 30px 0;
  width: 50%;
  min-height: calc(100vh - 64px);
  background-color: lightgrey;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BG_2x});
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NanniesCountStyle = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  gap: 16px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background.white};
  color: ${({ theme }) => theme.colors.greyText};
  & .red-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background-color: ${({ theme }) => theme.background.main};
    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TextCountStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${({ theme }) => theme.colors.greyText};
  & .text {
    font-family: 'HelveticaNeue-400';
    font-size: 16px;
    font-weight: 400;
  }
  & .count {
    font-family: 'HelveticaNeue-500';
    font-size: 24px;
    font-weight: 700;
  }
`;
