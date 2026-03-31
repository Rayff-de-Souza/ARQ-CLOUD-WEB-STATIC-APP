import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RotasList from './components/RotasList';
import RotaForm from './components/RotaForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <h1 className="text-xl font-semibold text-gray-900">MFE Rotas</h1>
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
                  Rotas Salvas
                </Link>
                <Link
                  to="/nova"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nova Rota
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lista" element={<RotasList />} />
            <Route path="/nova" element={<RotaForm />} />
            <Route path="/visualizar/:id" element={<RotaForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
