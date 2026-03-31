# Como Executar o Fast Delivery System

Este guia passo a passo explica como executar o projeto localmente.

## Método 1: Script Automático (Linux/Mac)

Execute o script que inicia todos os serviços automaticamente:

```bash
./start-all.sh
```

Este script irá:
1. Iniciar o MFE Pedidos na porta 5001
2. Iniciar o MFE Rotas na porta 5002
3. Iniciar o Host na porta 5173

Para parar todos os serviços, pressione `Ctrl+C`.

## Método 2: Manual (Recomendado para Windows)

Abra 3 terminais diferentes e execute:

### Terminal 1 - MFE Pedidos
```bash
cd mfe-pedidos
npm run dev
```

### Terminal 2 - MFE Rotas
```bash
cd mfe-rotas
npm run dev
```

### Terminal 3 - Host
```bash
npm run dev
```

## Acessando a Aplicação

Após iniciar todos os serviços, acesse:

**http://localhost:5173**

## Ordem de Inicialização

É IMPORTANTE iniciar os MFEs (Pedidos e Rotas) ANTES do Host, pois o Host tenta se conectar aos microfrontends no momento do carregamento.

### Ordem correta:
1. ✅ MFE Pedidos (5001)
2. ✅ MFE Rotas (5002)
3. ✅ Host (5173)

### Ordem incorreta:
1. ❌ Host primeiro → Erro ao carregar MFEs

## Instalação de Dependências

Antes da primeira execução, instale as dependências:

```bash
# Host
npm install

# MFE Pedidos
cd mfe-pedidos
npm install
cd ..

# MFE Rotas
cd mfe-rotas
npm install
cd ..
```

## Solução de Problemas

### Erro: "Cannot find module mfePedidos/PedidosApp"

**Causa**: O MFE Pedidos não está rodando ou não iniciou antes do Host

**Solução**:
1. Certifique-se que o MFE Pedidos está rodando em http://localhost:5001
2. Reinicie o Host

### Erro: "Cannot find module mfeRotas/RotasApp"

**Causa**: O MFE Rotas não está rodando ou não iniciou antes do Host

**Solução**:
1. Certifique-se que o MFE Rotas está rodando em http://localhost:5002
2. Reinicie o Host

### Porta já em uso

**Erro**: `Port 5173 is already in use`

**Solução**:
1. Pare o processo que está usando a porta
2. Ou altere a porta no `vite.config.ts`

### Tela branca ou erro de carregamento

**Solução**:
1. Abra o console do navegador (F12)
2. Verifique se há erros de rede (Network)
3. Certifique-se que os 3 serviços estão rodando
4. Limpe o cache do navegador (Ctrl+Shift+R)

## Verificando os Serviços

### MFE Pedidos (http://localhost:5001)
Você deve ver a página do microfrontend de Pedidos funcionando independentemente

### MFE Rotas (http://localhost:5002)
Você deve ver a página do microfrontend de Rotas funcionando independentemente

### Host (http://localhost:5173)
Você deve ver o dashboard principal com navegação para Pedidos e Rotas

## Build para Produção

Para gerar os builds de produção:

```bash
# Host
npm run build

# MFE Pedidos
cd mfe-pedidos
npm run build

# MFE Rotas
cd mfe-rotas
npm run build
```

Os arquivos gerados estarão nas pastas `dist/` de cada projeto.
