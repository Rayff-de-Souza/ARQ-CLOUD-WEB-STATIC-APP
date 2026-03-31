import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
