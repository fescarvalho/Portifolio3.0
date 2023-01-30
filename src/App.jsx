import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projetos from './pages/Project/Projetos';
import Contato from './pages/Contact/Contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
