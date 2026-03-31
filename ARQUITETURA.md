# Fast Delivery System - Arquitetura de Microfrontends

## 1. Visão Geral da Solução

O Fast Delivery System é uma aplicação web desenvolvida com arquitetura de microfrontends, permitindo que diferentes equipes trabalhem de forma independente em domínios específicos do negócio. A solução utiliza **React**, **Vite**, **Tailwind CSS** e **Module Federation** para criar uma experiência integrada e escalável.

### Objetivo do Sistema
Calcular rotas otimizadas entre diferentes endereços de entrega, trazendo o melhor caminho a percorrer e a sequência ideal de entregas, diminuindo atrasos e gastos com combustível para entregadores de delivery.

---

## 2. Arquitetura Proposta

### 2.1 Arquitetura de Microfrontends

A arquitetura é baseada em **Module Federation**, uma funcionalidade do Webpack (e adaptada para Vite) que permite:

- **Carregamento dinâmico**: Microfrontends são carregados sob demanda
- **Compartilhamento de dependências**: React, React DOM e outras libs são compartilhadas
- **Independência de deploy**: Cada microfrontend pode ser desenvolvido e implantado separadamente
- **Isolamento de domínio**: Cada MFE é responsável por um domínio específico

### 2.2 Componentes da Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                   HOST/SHELL                         │
│  - Roteamento principal                              │
│  - Layout compartilhado                              │
│  - Dashboard geral                                   │
│  - Navegação entre MFEs                              │
└──────────────┬──────────────────────┬────────────────┘
               │                      │
       ┌───────┴────────┐    ┌───────┴────────┐
       │  MFE Pedidos   │    │   MFE Rotas    │
       │                │    │                │
       │ - Cadastro     │    │ - Criar rotas  │
       │ - Edição       │    │ - Calcular     │
       │ - Listagem     │    │ - Visualizar   │
       └────────────────┘    └────────────────┘
```

### 2.3 Papel do Host/Shell

O **host** é a aplicação principal que:

1. Gerencia o roteamento global
2. Fornece layout compartilhado (header, navegação)
3. Carrega os microfrontends dinamicamente
4. Apresenta o dashboard principal
5. Coordena a comunicação entre MFEs (se necessário)

### 2.4 Papel dos Microfrontends

Cada **microfrontend** é:

- **Autônomo**: Possui sua própria estrutura, componentes e lógica
- **Responsável por um domínio**: Gerencia funcionalidades específicas
- **Expõe componentes**: Através do Module Federation
- **Compartilha dependências**: Com o host e outros MFEs

---

## 3. Divisão dos Microfrontends por Domínio

### 3.1 MFE Pedidos (mfe-pedidos)

**Responsabilidade**: Gerenciar todo o ciclo de vida dos pedidos de entrega

**Funcionalidades**:
- Cadastro de novos pedidos
- Edição de pedidos existentes
- Listagem de pedidos com filtros
- Visualização detalhada de pedidos
- Exclusão de pedidos

**Telas Principais**:
- Dashboard de pedidos (estatísticas)
- Lista de pedidos (tabela completa)
- Formulário de cadastro/edição

**Componentes Expostos**:
- `PedidosApp`: Aplicação completa com roteamento interno
- `PedidosList`: Componente de listagem
- `PedidoForm`: Formulário de cadastro/edição

**Entidades**:
- Pedido (id, cliente, estabelecimento, endereço, status, valor)
- Cliente (nome, telefone)
- Estabelecimento (nome, endereço)

### 3.2 MFE Rotas (mfe-rotas)

**Responsabilidade**: Criar e otimizar rotas de entrega

**Funcionalidades**:
- Definição de ponto de partida
- Cadastro de múltiplos endereços de entrega
- Cálculo da melhor rota (otimização)
- Salvamento de rotas
- Visualização de rotas salvas

**Telas Principais**:
- Dashboard de rotas (estatísticas de otimização)
- Formulário de criação de rota
- Lista de rotas salvas
- Visualização detalhada de rota

**Componentes Expostos**:
- `RotasApp`: Aplicação completa com roteamento interno
- `RotasList`: Listagem de rotas salvas
- `RotaForm`: Formulário de criação de rotas

**Entidades**:
- Rota (id, nome, ponto de partida, endereços, distância, tempo)
- Endereço (id, cliente, endereço, ordem na rota)
- Ponto de Partida (endereço, tipo)

---

## 4. Estrutura de Pastas

### 4.1 Host (Aplicação Principal)

```
project/
├── src/
│   ├── components/          # Componentes compartilhados
│   │   └── Header.tsx       # Cabeçalho/navegação
│   ├── layouts/             # Layouts da aplicação
│   │   └── MainLayout.tsx   # Layout principal
│   ├── pages/               # Páginas do host
│   │   ├── Home.tsx         # Dashboard principal
│   │   ├── PedidosPage.tsx  # Container do MFE Pedidos
│   │   └── RotasPage.tsx    # Container do MFE Rotas
│   ├── types/               # Definições de tipos
│   │   └── federation.d.ts  # Tipos para Module Federation
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── vite.config.ts           # Configuração Vite + Federation
├── package.json
└── tsconfig.json
```

### 4.2 MFE Pedidos

```
mfe-pedidos/
├── src/
│   ├── components/
│   │   ├── PedidosList.tsx  # Lista de pedidos
│   │   └── PedidoForm.tsx   # Formulário
│   ├── pages/
│   │   └── Dashboard.tsx    # Dashboard de pedidos
│   ├── App.tsx              # App do MFE
│   ├── main.tsx             # Entry point
│   └── index.css
├── vite.config.ts           # Config com Federation
├── package.json
├── index.html
└── tsconfig.json
```

### 4.3 MFE Rotas

```
mfe-rotas/
├── src/
│   ├── components/
│   │   ├── RotasList.tsx    # Lista de rotas
│   │   └── RotaForm.tsx     # Formulário de rotas
│   ├── pages/
│   │   └── Dashboard.tsx    # Dashboard de rotas
│   ├── App.tsx              # App do MFE
│   ├── main.tsx             # Entry point
│   └── index.css
├── vite.config.ts           # Config com Federation
├── package.json
├── index.html
└── tsconfig.json
```

---

## 5. Tecnologias e Justificativas

### 5.1 React
- **Justificativa**: Biblioteca componente mais popular, ótimo ecossistema, suporte a Module Federation
- **Uso**: Criação de componentes reutilizáveis e gerenciamento de estado

### 5.2 Vite
- **Justificativa**: Build tool extremamente rápido, HMR instantâneo, suporte nativo a ESM
- **Uso**: Build e desenvolvimento local

### 5.3 Tailwind CSS
- **Justificativa**: Utility-first CSS, design consistente, fácil customização
- **Uso**: Estilização de toda a aplicação

### 5.4 Module Federation (via @originjs/vite-plugin-federation)
- **Justificativa**: Permite arquitetura de microfrontends com compartilhamento de código
- **Uso**: Integração entre host e MFEs

### 5.5 React Router DOM
- **Justificativa**: Roteamento client-side padrão para React
- **Uso**: Navegação entre páginas e MFEs

### 5.6 TypeScript
- **Justificativa**: Type safety, melhor experiência de desenvolvimento
- **Uso**: Todo o código da aplicação

### 5.7 Lucide React
- **Justificativa**: Ícones modernos e consistentes
- **Uso**: Interface visual

---

## 6. Configuração do Module Federation

### 6.1 Host (vite.config.ts)

```typescript
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        mfePedidos: 'http://localhost:5001/assets/remoteEntry.js',
        mfeRotas: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
});
```

### 6.2 MFE Pedidos (vite.config.ts)

```typescript
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_pedidos',
      filename: 'remoteEntry.js',
      exposes: {
        './PedidosApp': './src/App',
        './PedidosList': './src/components/PedidosList',
        './PedidoForm': './src/components/PedidoForm',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
});
```

### 6.3 MFE Rotas (vite.config.ts)

```typescript
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_rotas',
      filename: 'remoteEntry.js',
      exposes: {
        './RotasApp': './src/App',
        './RotasList': './src/components/RotasList',
        './RotaForm': './src/components/RotaForm',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
});
```

---

## 7. Fluxo de Carregamento

1. **Usuário acessa a aplicação** → Host é carregado
2. **Host renderiza layout** → Header e navegação aparecem
3. **Usuário navega para /pedidos** → Host carrega dinamicamente o MFE Pedidos
4. **MFE Pedidos é renderizado** → Componentes do domínio de pedidos são exibidos
5. **Usuário navega para /rotas** → Host carrega dinamicamente o MFE Rotas
6. **MFE Rotas é renderizado** → Componentes do domínio de rotas são exibidos

---

## 8. Boas Práticas

### 8.1 Organização por Domínio
- Cada MFE é responsável por um domínio específico
- Evitar dependências cruzadas entre MFEs
- Manter comunicação através do host quando necessário

### 8.2 Compartilhamento de Componentes
- Componentes genéricos devem ficar no host
- Componentes específicos de domínio ficam nos MFEs
- Criar biblioteca de componentes compartilhados se necessário

### 8.3 Comunicação entre Microfrontends
- **Evitar comunicação direta** entre MFEs
- Usar **estado global** no host (Context API, Zustand) se necessário
- **Custom Events** para comunicação assíncrona
- **Props** através do host para dados compartilhados

### 8.4 Estratégia de Evolução
1. **Escalabilidade horizontal**: Adicionar novos MFEs para novos domínios
2. **Times independentes**: Cada time gerencia seu MFE
3. **Versionamento**: Controlar versões de componentes expostos
4. **Testes isolados**: Cada MFE pode ser testado separadamente
5. **Deploy independente**: MFEs podem ser implantados sem afetar outros

---

## 9. Próximos Passos

1. **Integração com APIs**: Conectar com backend para dados reais
2. **Autenticação**: Implementar sistema de login
3. **Gerenciamento de Estado**: Adicionar Context API ou Zustand
4. **Testes**: Implementar testes unitários e E2E
5. **CI/CD**: Configurar pipelines de deploy independentes
6. **Otimização de Rotas Real**: Integrar com Google Maps API ou similar
7. **Performance**: Implementar lazy loading e code splitting
8. **Monitoramento**: Adicionar analytics e error tracking
