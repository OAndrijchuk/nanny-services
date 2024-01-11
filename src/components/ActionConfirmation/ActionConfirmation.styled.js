import styled from 'styled-components';

export const ConfirmationTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-500';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`;
export const ConfirmationBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export const YesButton = styled.button`
  display: flex;
  gap: 18px;
  width: max-content;
  background-color: transparent;
  padding: 14px 39px;
  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.darkText};
  color: ${({ theme }) => theme.colors.darkText};
  fill: currentColor;
  font-family: 'HelveticaNeue-500', sans-serif;
  /* font-size: 16px; */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  letter-spacing: -0.16px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightText};
    color: ${({ theme }) => theme.background.main};
    border: 1px solid ${({ theme }) => theme.background.main};
  }
`;
