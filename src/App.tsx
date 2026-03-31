import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PedidosPage from './pages/PedidosPage';
import RotasPage from './pages/RotasPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pedidos/*" element={<PedidosPage />} />
          <Route path="rotas/*" element={<RotasPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
