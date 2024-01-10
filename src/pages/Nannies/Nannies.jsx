import { Filters, Header, NanniesList } from '../../components';
import { NanniesContainer } from './Nannies.styled';
import { SectionStyle } from '../../styles/GlobalComponentsStyled/Section';
import { useSelector } from 'react-redux';
import { getFilterNannies, getNannies } from '../../redux/Global/selectors';

const Nannies = () => {
  const nan = useSelector(getNannies);
  const filterNannies = useSelector(getFilterNannies);

  return (
    <>
      <Header BGColor />
      <SectionStyle>
        <NanniesContainer>
          <Filters arr={nan} />
          <NanniesList nannies={filterNannies} />
        </NanniesContainer>
      </SectionStyle>
    </>
  );
};

export default Nannies;
