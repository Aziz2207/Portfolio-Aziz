import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Chemin pour GitHub Pages
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers transpilés
    assetsDir: 'assets', // Répertoire des fichiers CSS et JS
  },
});
