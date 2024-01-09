import { Filters, Header, NanniesList } from '../../components';
import nannies from '../../assets/babySitters.json';
import { NanniesContainer } from './Nannies.styled';
import { SectionStyle } from '../../styles/GlobalComponentsStyled/Section';

const Nannies = () => {
  return (
    <>
      <Header BGColor />
      <SectionStyle>
        <NanniesContainer>
          <Filters />
          <NanniesList nannies={nannies} />
        </NanniesContainer>
      </SectionStyle>
    </>
  );
};

export default Nannies;
