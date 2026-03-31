function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard de Pedidos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Total de Pedidos</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">0</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Pedidos Pendentes</div>
          <div className="mt-2 text-3xl font-semibold text-orange-600">0</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm font-medium text-gray-500">Pedidos Concluídos</div>
          <div className="mt-2 text-3xl font-semibold text-green-600">0</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
