import styled from 'styled-components';

export const NannyListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const ColorButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.background.main};
  padding: 14px 39px;
  border-radius: 200px;
  border: none;
  width: max-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.lightText};
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
  }
`;
