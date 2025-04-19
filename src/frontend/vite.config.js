import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',        // Optional, defaults to project root
  base: './',       // Useful for relative paths if hosting in subdirectories
  server: {
    port: 5173,     // Default port for dev server
    open: true,     // Automatically open browser
  },
  build: {
    outDir: 'dist', // Output directory for build
  }
});
