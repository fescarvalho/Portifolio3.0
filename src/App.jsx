import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projetos from './pages/Project/Projetos';
import Contato from './pages/Contact/Contato';
import PageProject from './pages/PageProject/PageProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/projetos/dogs" element={<PageProject />} />
        <Route path="/projetos/bike" element={<Contato />} />
        <Route path="/projetos/supermarket" element={<Contato />} />
        <Route path="/projetos/lescone" element={<Contato />} />
        <Route path="/projetos/hoursbus" element={<Contato />} />
        <Route path="/projetos/walletapp" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
