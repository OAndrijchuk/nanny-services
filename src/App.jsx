import { Route, Routes } from 'react-router-dom';
import { Global } from './styles/GlobalStyle';
import { Favorites, Home, Nannies, NotFound } from './pages';

function App() {
  return (
    <>
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
