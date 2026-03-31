import { lazy, Suspense } from 'react';

const RotasApp = lazy(() => import('mfeRotas/RotasApp'));

function RotasPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-600">Carregando módulo de rotas...</p>
          </div>
        </div>
      }
    >
      <RotasApp />
    </Suspense>
  );
}

export default RotasPage;
