import styled from 'styled-components';
import { ContainerStyle } from '../../styles/GlobalComponentsStyled/ContainerStyle';

export const NanniesContainer = styled(ContainerStyle)`
  padding: 64px 128px;
  @media screen and (max-width: 800px) {
    padding: 24px 0;
  }
`;
