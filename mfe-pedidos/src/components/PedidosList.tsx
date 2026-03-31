import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Pedido {
  id: string;
  cliente: string;
  estabelecimento: string;
  endereco: string;
  status: 'pendente' | 'em_rota' | 'entregue';
  valor: number;
  dataCriacao: string;
}

function PedidosList() {
  const navigate = useNavigate();
  const [pedidos] = useState<Pedido[]>([
    {
      id: '1',
      cliente: 'João Silva',
      estabelecimento: 'Restaurante Bom Sabor',
      endereco: 'Rua das Flores, 123',
      status: 'pendente',
      valor: 45.90,
      dataCriacao: new Date().toISOString(),
    },
    {
      id: '2',
      cliente: 'Maria Santos',
      estabelecimento: 'Pizzaria Napolitana',
      endereco: 'Av. Principal, 456',
      status: 'em_rota',
      valor: 67.50,
      dataCriacao: new Date().toISOString(),
    },
  ]);

  const getStatusColor = (status: string) => {
    const colors = {
      pendente: 'bg-orange-100 text-orange-800',
      em_rota: 'bg-blue-100 text-blue-800',
      entregue: 'bg-green-100 text-green-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      pendente: 'Pendente',
      em_rota: 'Em Rota',
      entregue: 'Entregue',
    };
    return labels[status as keyof typeof labels] || status;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Lista de Pedidos</h2>
        <button
          onClick={() => navigate('/novo')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Novo Pedido
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estabelecimento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Endereço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pedidos.map((pedido) => (
              <tr key={pedido.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pedido.cliente}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pedido.estabelecimento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pedido.endereco}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  R$ {pedido.valor.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(pedido.status)}`}>
                    {getStatusLabel(pedido.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => navigate(`/editar/${pedido.id}`)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Editar
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PedidosList;
