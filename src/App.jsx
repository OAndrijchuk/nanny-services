import { Route, Routes } from 'react-router-dom';
import { Global } from './styles/GlobalStyle';
import { Favorites, Home, Nannies, NotFound } from './pages';
import { useSelector } from 'react-redux';
import { Loader } from './components';

function App() {
  const isLoading = useSelector(state => state.auth.isLoading);
  const isLoadingG = useSelector(state => state.global.isLoading);
  return (
    <>
      {isLoading && <Loader />}
      {isLoadingG && <Loader />}
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
