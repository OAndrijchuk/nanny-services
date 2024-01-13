export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'arrow':
      return (
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z"
            // fill="#FBFBFB"
          />
        </svg>
      );
    case 'check':
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z"
            fill="#FBFBFB"
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M24 8L8 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'eye-off':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_10_410)">
            <path
              d="M14.9499 14.95C13.5254 16.0358 11.7908 16.6374 9.99992 16.6667C4.16659 16.6667 0.833252 10 0.833252 10C1.86983 8.06825 3.30753 6.38051 5.04992 5.05M8.24992 3.53333C8.82353 3.39907 9.41081 3.33195 9.99992 3.33333C15.8333 3.33333 19.1666 10 19.1666 10C18.6607 10.9463 18.0575 11.8373 17.3666 12.6583M11.7666 11.7667C11.5377 12.0123 11.2617 12.2093 10.955 12.3459C10.6484 12.4826 10.3173 12.556 9.98166 12.562C9.64599 12.5679 9.31256 12.5061 9.00126 12.3804C8.68997 12.2547 8.40719 12.0675 8.16979 11.8301C7.9324 11.5927 7.74525 11.31 7.61951 10.9987C7.49377 10.6874 7.43202 10.3539 7.43795 10.0183C7.44387 9.68258 7.51734 9.35154 7.65398 9.04487C7.79062 8.73821 7.98763 8.46221 8.23325 8.23333"
              stroke="#11101C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.833252 0.833313L19.1666 19.1666"
              stroke="#11101C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_410">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'eye':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_31_2517)">
            <path
              d="M0.833313 10C0.833313 10 4.16665 3.33337 9.99998 3.33337C15.8333 3.33337 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99998 16.6667C4.16665 16.6667 0.833313 10 0.833313 10Z"
              stroke="#11101C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke="#11101C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_31_2517">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'heart':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'map-pin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_15_838)">
            <path
              d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z"
              stroke="#11101C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
              stroke="#11101C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_838">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'star':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_15_844)">
            <path
              d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
              fill="#FFC531"
              stroke="#FFC531"
              strokeWidth="1.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_844">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'avatar':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
            fill="#F03F3B"
          />
        </svg>
      );
    case 'burger-menu':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
