import { Link } from 'react-router-dom';
import { Package, Route, Home } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Route className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Fast Delivery System</h1>
              <p className="text-xs text-gray-500">Otimize suas entregas</p>
            </div>
          </Link>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              to="/pedidos"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Package className="w-4 h-4" />
              Pedidos
            </Link>
            <Link
              to="/rotas"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Route className="w-4 h-4" />
              Rotas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
