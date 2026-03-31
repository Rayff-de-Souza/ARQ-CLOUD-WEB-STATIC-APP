function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard de Rotas</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Rotas Salvas</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">0</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Entregas do Dia</div>
          <div className="mt-2 text-3xl font-semibold text-blue-600">0</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Distância Economizada</div>
          <div className="mt-2 text-3xl font-semibold text-green-600">0 km</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Como Funciona</h3>
        <div className="space-y-3 text-gray-600">
          <p>1. Defina seu ponto de partida</p>
          <p>2. Adicione os endereços de entrega</p>
          <p>3. O sistema calculará a melhor rota automaticamente</p>
          <p>4. Economize tempo e combustível seguindo a rota otimizada</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
