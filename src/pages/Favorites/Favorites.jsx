import { useSelector } from 'react-redux';
import { Filters, Header, NanniesList } from '../../components';
import { NanniesContainer } from '../Nannies/Nannies.styled';

const Favorites = () => {
  const nannies = useSelector(state => state.auth.favoritesNannies);
  return (
    <>
      <Header BGColor />
      <NanniesContainer>
        <Filters />
        <NanniesList nannies={nannies} />
      </NanniesContainer>
    </>
  );
};

export default Favorites;
