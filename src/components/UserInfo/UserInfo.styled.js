import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 14px;
`;
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightText};
`;
export const NameStyle = styled.p`
  color: ${({ theme }) => theme.colors.lightText};

  font-family: 'HelveticaNeue-500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  letter-spacing: -0.18px;
`;
