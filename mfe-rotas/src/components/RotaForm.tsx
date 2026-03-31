import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Endereco {
  id: string;
  endereco: string;
  cliente: string;
  ordem?: number;
}

function RotaForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isViewing = !!id;

  const [nomeRota, setNomeRota] = useState('');
  const [pontoPartida, setPontoPartida] = useState('');
  const [novoEndereco, setNovoEndereco] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [enderecos, setEnderecos] = useState<Endereco[]>([]);

  const adicionarEndereco = () => {
    if (novoEndereco && nomeCliente) {
      const endereco: Endereco = {
        id: Date.now().toString(),
        endereco: novoEndereco,
        cliente: nomeCliente,
      };
      setEnderecos([...enderecos, endereco]);
      setNovoEndereco('');
      setNomeCliente('');
    }
  };

  const removerEndereco = (id: string) => {
    setEnderecos(enderecos.filter((e) => e.id !== id));
  };

  const calcularRota = () => {
    const rotaCalculada = enderecos.map((e, index) => ({
      ...e,
      ordem: index + 1,
    }));
    setEnderecos(rotaCalculada);
    console.log('Rota calculada:', rotaCalculada);
  };

  const salvarRota = () => {
    const rota = {
      nome: nomeRota,
      pontoPartida,
      enderecos,
    };
    console.log('Salvando rota:', rota);
    navigate('/lista');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {isViewing ? 'Visualizar Rota' : 'Nova Rota'}
        </h2>
        <button
          onClick={() => navigate('/lista')}
          className="text-gray-600 hover:text-gray-900"
        >
          Voltar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white shadow-sm rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Informações da Rota</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Rota
              </label>
              <input
                type="text"
                value={nomeRota}
                onChange={(e) => setNomeRota(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Rota Centro - Tarde"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ponto de Partida
              </label>
              <input
                type="text"
                value={pontoPartida}
                onChange={(e) => setPontoPartida(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Depósito Central ou usar localização atual"
              />
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Adicionar Endereço</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Cliente
              </label>
              <input
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="João Silva"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Endereço de Entrega
              </label>
              <input
                type="text"
                value={novoEndereco}
                onChange={(e) => setNovoEndereco(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && adicionarEndereco()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Rua das Flores, 123 - Centro"
              />
            </div>

            <button
              onClick={adicionarEndereco}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Adicionar Endereço
            </button>
          </div>

          {enderecos.length > 0 && (
            <div className="flex gap-3">
              <button
                onClick={calcularRota}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Calcular Melhor Rota
              </button>
              <button
                onClick={salvarRota}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Salvar Rota
              </button>
            </div>
          )}
        </div>

        <div className="bg-white shadow-sm rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Endereços de Entrega ({enderecos.length})
          </h3>

          {enderecos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Nenhum endereço adicionado ainda</p>
              <p className="text-sm mt-2">Adicione endereços para começar a criar sua rota</p>
            </div>
          ) : (
            <div className="space-y-3">
              {enderecos.map((endereco, index) => (
                <div
                  key={endereco.id}
                  className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                    {endereco.ordem || index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">{endereco.cliente}</div>
                    <div className="text-sm text-gray-500 break-words">{endereco.endereco}</div>
                  </div>
                  <button
                    onClick={() => removerEndereco(endereco.id)}
                    className="flex-shrink-0 text-red-600 hover:text-red-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {enderecos.length > 0 && (
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Total de Entregas</div>
                  <div className="text-lg font-semibold text-gray-900">{enderecos.length}</div>
                </div>
                <div>
                  <div className="text-gray-500">Distância Estimada</div>
                  <div className="text-lg font-semibold text-gray-900">-- km</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RotaForm;
