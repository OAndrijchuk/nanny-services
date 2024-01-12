import styled from 'styled-components';

export const ItemContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.background.white};

  @media screen and (max-width: 560px) {
    flex-direction: column;
    gap: 24px;
  }
`;
export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid rgba(240, 63, 59, 0.2);
  padding: 12px;
`;
export const Photo = styled.img`
  border-radius: 15px;
  display: block;
  width: 96px;
  height: 96px;
`;
export const InfoContainer = styled.div`
  padding: 0 0 0 24px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 560px) {
    padding: 0;
  }
`;
export const InfoHead = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 8px;
  & ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 8px;
    margin-left: auto;
    & li {
      width: max-content;
      display: flex;
      align-items: center;
      padding: 0 16px 0 16px;
      border-left: 1px solid rgba(17, 16, 28, 0.2);
      gap: 8px;
      &:nth-child(1) {
        padding-left: 0;
        border-left: none;
      }
    }
  }
`;
export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    fill: ${({ $bgColor }) => ($bgColor ? $bgColor : 'white')};
    transition: ${({ theme }) => theme.transition};
    &:hover {
      fill: red;
    }
  }

  @media screen and (max-width: 560px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;
export const Price = styled.span`
  color: #38cd3e;
`;
export const NannyName = styled.h2`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1; /* 100% */
  margin-bottom: 24px;
`;
export const NannyParamsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  font-family: 'HelveticaNeue-500';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  & li {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.background.text};
    & span {
      color: ${({ theme }) => theme.colors.darkText};
    }
  }
`;
export const ReadMoreButton = styled.button`
  width: fit-content;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.darkText};
  margin-top: 14px;
  font-family: 'HelveticaNeue-500';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;
