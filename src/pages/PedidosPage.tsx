import { lazy, Suspense } from 'react';

const PedidosApp = lazy(() => import('mfePedidos/PedidosApp'));

function PedidosPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-600">Carregando módulo de pedidos...</p>
          </div>
        </div>
      }
    >
      <PedidosApp />
    </Suspense>
  );
}

export default PedidosPage;
