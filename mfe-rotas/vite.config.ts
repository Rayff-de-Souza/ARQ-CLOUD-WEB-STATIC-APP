import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
