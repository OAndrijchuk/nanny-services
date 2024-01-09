import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 472px;
`;
export const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-500';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`;

export const ContactText = styled.p`
  margin-bottom: 40px;
  font-family: 'HelveticaNeue-400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 120% */
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px 8px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px 8px;
  flex-wrap: wrap;
  & div {
    min-width: calc(50% - 4px);
    flex-grow: 1;
  }
`;
export const NannyInfo = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
export const NannyPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;
export const NannyName = styled.p`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-500';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;
export const NannyLabel = styled.p`
  margin-bottom: 4px;
  font-family: 'HelveticaNeue-500';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;
export const TextareaStyle = styled.textarea`
  padding: 16px 18px;
  height: 116px;
  border-radius: 12px;
  resize: none;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-400';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;
