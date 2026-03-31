import { Link } from 'react-router-dom';
import { Package, Route, TrendingDown, Clock } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Bem-vindo ao Fast Delivery System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Otimize suas rotas de entrega, economize tempo e combustível
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Total de Pedidos</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">0</div>
          <div className="mt-1 text-xs text-gray-500">cadastrados no sistema</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Rotas Criadas</div>
          <div className="mt-2 text-3xl font-semibold text-blue-600">0</div>
          <div className="mt-1 text-xs text-gray-500">rotas otimizadas</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Tempo Economizado</div>
          <div className="mt-2 text-3xl font-semibold text-green-600">0h</div>
          <div className="mt-1 text-xs text-gray-500">em otimizações</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Distância Economizada</div>
          <div className="mt-2 text-3xl font-semibold text-green-600">0 km</div>
          <div className="mt-1 text-xs text-gray-500">menos percorridos</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/pedidos"
          className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gerenciar Pedidos
              </h3>
              <p className="text-gray-600">
                Cadastre, edite e visualize todos os pedidos de entrega do sistema
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>• Cadastro completo de pedidos</li>
                <li>• Informações de cliente e estabelecimento</li>
                <li>• Status de cada pedido</li>
              </ul>
            </div>
          </div>
        </Link>

        <Link
          to="/rotas"
          className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Route className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Otimizar Rotas
              </h3>
              <p className="text-gray-600">
                Crie rotas otimizadas para economizar tempo e combustível
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>• Cálculo automático da melhor rota</li>
                <li>• Múltiplos pontos de entrega</li>
                <li>• Economia de tempo e combustível</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Como funciona?</h3>
            <p className="text-blue-100 max-w-2xl">
              Nosso sistema calcula automaticamente a melhor sequência de entregas,
              reduzindo o tempo total de viagem e o consumo de combustível
            </p>
          </div>
          <div className="hidden lg:flex gap-8">
            <div className="text-center">
              <TrendingDown className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Menos Distância</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Menos Tempo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
