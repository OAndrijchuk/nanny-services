import {
  StyledLink,
  StyledText,
  StyledTextErr,
  StyledThumb,
  StyledTitle,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <StyledThumb>
      <StyledTextErr>404</StyledTextErr>
      <StyledTitle>Something{`'`}wrong here.</StyledTitle>
      <StyledText>
        This is a 404 error, which means you{`'`}ve clicked on a bad link or
        entered an invalid URL.
      </StyledText>
      <StyledText>
        Maybe what you are looking for can be found at
        {
          <StyledLink to="/">
            Home
            {/* <BiHomeAlt2 /> */}
          </StyledLink>
        }
      </StyledText>
    </StyledThumb>
  );
};
export default NotFound;
