import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  gap: 24px;
  padding: 5px;
  font-family: Poppins-SemiBold;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.greyText};
  cursor: pointer;

  transition: all 250ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;
export const StyledThumb = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.background.light},
    ${({ theme }) => theme.background.main}
  );
`;
export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkText};
`;
export const StyledTextErr = styled.p`
  font-family: Poppins-Bold;
  font-size: 100px;
  color: ${({ theme }) => theme.colors.darkText};
`;
export const StyledText = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkText};
`;
