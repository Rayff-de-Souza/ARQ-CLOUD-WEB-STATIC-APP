# Fast Delivery System - Microfrontends

Sistema de otimização de rotas de entrega desenvolvido com arquitetura de microfrontends.

## Sobre o Projeto

O Fast Delivery System permite que entregadores cadastrem pedidos e criem rotas otimizadas para múltiplos endereços, economizando tempo e combustível.

## Arquitetura

Este projeto utiliza **Module Federation** para implementar uma arquitetura de microfrontends:

- **Host** (porta 5173): Aplicação principal que integra os microfrontends
- **MFE Pedidos** (porta 5001): Gerenciamento de pedidos
- **MFE Rotas** (porta 5002): Criação e otimização de rotas

Para mais detalhes, consulte [ARQUITETURA.md](./ARQUITETURA.md)

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Module Federation
- React Router DOM
- Lucide React (ícones)

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Instalar dependências do Host:**
```bash
npm install
```

2. **Instalar dependências do MFE Pedidos:**
```bash
cd mfe-pedidos
npm install
cd ..
```

3. **Instalar dependências do MFE Rotas:**
```bash
cd mfe-rotas
npm install
cd ..
```

### Executar em Desenvolvimento

Você precisa executar todos os 3 projetos simultaneamente em terminais separados:

**Terminal 1 - MFE Pedidos:**
```bash
cd mfe-pedidos
npm run dev
```
Será executado em: http://localhost:5001

**Terminal 2 - MFE Rotas:**
```bash
cd mfe-rotas
npm run dev
```
Será executado em: http://localhost:5002

**Terminal 3 - Host:**
```bash
npm run dev
```
Será executado em: http://localhost:5173

### Acessar a Aplicação

Após iniciar os 3 servidores, acesse: **http://localhost:5173**

## Estrutura do Projeto

```
project/
├── src/                    # Host application
├── mfe-pedidos/           # Microfrontend de Pedidos
├── mfe-rotas/             # Microfrontend de Rotas
├── ARQUITETURA.md         # Documentação detalhada
└── README.md              # Este arquivo
```

## Funcionalidades

### Módulo de Pedidos
- Cadastro de pedidos de entrega
- Listagem de pedidos
- Edição e exclusão de pedidos
- Dashboard com estatísticas

### Módulo de Rotas
- Definição de ponto de partida
- Adição de múltiplos endereços
- Cálculo de melhor rota
- Salvamento de rotas
- Visualização de rotas otimizadas

## Build para Produção

**Build de todos os projetos:**

```bash
# Host
npm run build

# MFE Pedidos
cd mfe-pedidos && npm run build && cd ..

# MFE Rotas
cd mfe-rotas && npm run build && cd ..
```

## Contribuindo

1. Cada microfrontend pode ser desenvolvido independentemente
2. Mantenha a separação de responsabilidades por domínio
3. Evite dependências cruzadas entre MFEs
4. Use TypeScript para garantir type safety

## Próximas Melhorias

- [ ] Integração com API de mapas (Google Maps, OpenStreetMap)
- [ ] Sistema de autenticação
- [ ] Persistência de dados (backend + banco de dados)
- [ ] Notificações em tempo real
- [ ] Aplicativo mobile
- [ ] Relatórios e analytics

## Licença

Este projeto foi desenvolvido para fins educacionais.
