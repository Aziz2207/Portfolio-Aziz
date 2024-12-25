import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: 'https://aziz2207.github.io/Portfolio-Aziz/', 
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers transpilés
    assetsDir: 'dist/assets', // Répertoire des fichiers CSS et JS
  },
});
