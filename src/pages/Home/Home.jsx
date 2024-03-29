import { useNavigate } from 'react-router-dom';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import { Header, TransparentBtn } from '../../components';
import {
  BGImageStyle,
  HomeContainer,
  HomeSection,
  HomeTextContainer,
  HomeTitle,
  HomeTitleText,
  NanniesCountStyle,
  TextCountStyle,
} from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeSection>
      <HomeContainer>
        <Header />
        <HomeTextContainer>
          <HomeTitle>Make Life Easier for the Family:</HomeTitle>
          <HomeTitleText>
            Find Babysitters Online for All Occasions
          </HomeTitleText>
          <TransparentBtn type="button" onClick={() => navigate('nannies')}>
            Get started <SpriteSVG name="arrow" />
          </TransparentBtn>
        </HomeTextContainer>
        <BGImageStyle>
          <NanniesCountStyle>
            <div className="red-container">
              <SpriteSVG name="fe:check" />
            </div>
            <TextCountStyle>
              <p className="text">Experienced nannies</p>
              <p className="count">15,000</p>
            </TextCountStyle>
          </NanniesCountStyle>
        </BGImageStyle>
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;
