import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Rota {
  id: string;
  nome: string;
  pontoPartida: string;
  totalEnderecos: number;
  distanciaTotal: number;
  tempoEstimado: number;
  dataCriacao: string;
}

function RotasList() {
  const navigate = useNavigate();
  const [rotas] = useState<Rota[]>([
    {
      id: '1',
      nome: 'Rota Centro - Tarde',
      pontoPartida: 'Depósito Central',
      totalEnderecos: 8,
      distanciaTotal: 15.2,
      tempoEstimado: 45,
      dataCriacao: new Date().toISOString(),
    },
    {
      id: '2',
      nome: 'Rota Zona Sul - Manhã',
      pontoPartida: 'Depósito Sul',
      totalEnderecos: 12,
      distanciaTotal: 22.5,
      tempoEstimado: 65,
      dataCriacao: new Date().toISOString(),
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Rotas Salvas</h2>
        <button
          onClick={() => navigate('/nova')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Nova Rota
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rotas.map((rota) => (
          <div
            key={rota.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/visualizar/${rota.id}`)}
          >
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{rota.nome}</h3>
                <p className="text-sm text-gray-500 mt-1">{rota.pontoPartida}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500">Endereços</div>
                  <div className="text-lg font-semibold text-gray-900">{rota.totalEnderecos}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Distância</div>
                  <div className="text-lg font-semibold text-gray-900">{rota.distanciaTotal} km</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Tempo Estimado</div>
                <div className="text-sm font-medium text-gray-900">{rota.tempoEstimado} minutos</div>
              </div>

              <div className="pt-4 border-t flex justify-between items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/visualizar/${rota.id}`);
                  }}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver Detalhes
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Excluir rota', rota.id);
                  }}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotasList;
