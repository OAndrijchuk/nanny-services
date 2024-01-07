import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: 'HelveticaNeue-400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
  border: ${props =>
    props.$error ? '1px solid red' : '1px solid rgba(17, 16, 28, 0.1)'};
`;
export const RightIconStyle = styled.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;
export const ErrorText = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.error};
  top: 0;
  left: 18px;
  transform: translateY(-100%);
  font-family: 'HelveticaNeue-500';
  font-size: 14px;
  font-style: normal;
  line-height: 1.2; /* 120% */
`;
