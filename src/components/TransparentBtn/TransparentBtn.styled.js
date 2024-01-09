import styled from 'styled-components';

export const TransparentButton = styled.button`
  display: flex;
  gap: 18px;
  width: max-content;
  background-color: transparent;
  padding: 14px 39px;
  border-radius: 200px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: ${({ theme }) => theme.colors.lightText};
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
    svg {
      transform: rotate(53deg);
    }
  }
`;
