import { Filters, Header, NanniesList } from '../../components';
import { NanniesContainer } from './Nannies.styled';
import { SectionStyle } from '../../styles/GlobalComponentsStyled/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterNannies, getNannies } from '../../redux/Global/selectors';
import { useEffect } from 'react';
import { getAllNannies } from '../../redux/Global/operations';

const Nannies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNannies());
  }, [dispatch]);

  const filterNannies = useSelector(getFilterNannies);

  return (
    <>
      <Header BGColor />
      <SectionStyle>
        <NanniesContainer>
          <Filters />
          <NanniesList nannies={filterNannies} />
        </NanniesContainer>
      </SectionStyle>
    </>
  );
};

export default Nannies;
