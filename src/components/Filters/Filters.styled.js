import styled from 'styled-components';

export const FiltersContainer = styled.div`
  padding: 24px;
`;
export const FiltersTitle = styled.h2`
  margin-bottom: 8px;
  font-family: 'HelveticaNeue-500';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
`;
export const SelectContainerStyle = styled.div`
  width: 226px;

  & .select-prefix {
    &__control {
      cursor: pointer;
      height: 48px;
      border-radius: 14px;
      background-color: ${({ theme }) => theme.background.main};
      color: ${({ theme }) => theme.colors.lightText};

      & svg {
        transition: transform 200ms ease-in-out;
        stroke: ${({ theme }) => theme.colors.lightText};
        fill: ${({ theme }) => theme.colors.lightText};
      }
      &--menu-is-open {
        & svg {
          transform: rotateX(180deg);
        }
      }
    }
    &__value-container {
      padding-left: 18px;
    }
    &__single-value {
      color: ${({ theme }) => theme.colors.lightText};
      font-family: 'HelveticaNeue-500';
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.11; /* 20px */
    }
    &__input-container {
      color: ${({ theme }) => theme.colors.lightText};
    }
    &__indicator-separator {
      display: none;
    }
    &__indicator {
      padding-right: 18px;
    }
    &__menu {
      padding: 14px 18px;
      border-radius: 14px;
      box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
    }
    &__menu-list {
      gap: 12px;
    }
    &__option {
      cursor: pointer;
      &--is-focused,
      &--is-selected,
      &:active {
        color: ${({ theme }) => theme.colors.darkText};
        background-color: transparent;
      }
      /* {
        color: ${({ theme }) => theme.colors.darkText};
        background-color: transparent;
      }
       {
        background-color: transparent;
      } */
    }
  }
`;
