import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PedidosList from './components/PedidosList';
import PedidoForm from './components/PedidoForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <h1 className="text-xl font-semibold text-gray-900">MFE Pedidos</h1>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/lista"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Lista de Pedidos
                </Link>
                <Link
                  to="/novo"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Novo Pedido
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lista" element={<PedidosList />} />
            <Route path="/novo" element={<PedidoForm />} />
            <Route path="/editar/:id" element={<PedidoForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
