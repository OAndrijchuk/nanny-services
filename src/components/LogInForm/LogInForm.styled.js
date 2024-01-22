import styled from 'styled-components';

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 438px;
  background-color: ${({ theme }) => theme.colors.lightText};
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const LogInTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-500';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`;

export const LogInText = styled.p`
  margin-bottom: 40px;
  font-family: 'HelveticaNeue-500';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 120% */
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
