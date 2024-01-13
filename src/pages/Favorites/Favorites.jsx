import { useSelector } from 'react-redux';
import { Filters, Header, NanniesList } from '../../components';
import { NanniesContainer } from '../Nannies/Nannies.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigation = useNavigate();
  const nannies = useSelector(state => state.auth.favoritesNannies);
  const isAuth = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    if (!isAuth) {
      navigation('/');
    }
  }, [isAuth, navigation]);
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
