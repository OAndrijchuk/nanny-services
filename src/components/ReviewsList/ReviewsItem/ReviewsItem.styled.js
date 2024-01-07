import styled from 'styled-components';

export const ReviewerInfoContainer = styled.div`
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 16px;
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.background.light};
  color: ${({ theme }) => theme.background.main};
  font-family: 'HelveticaNeue-500';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1; /* 100% */
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const CommentText = styled.p`
  line-height: 1.25; /* 125% */
`;

export const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ReviewerName = styled.h4`
  font-family: 'HelveticaNeue-500';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 100% */
`;
