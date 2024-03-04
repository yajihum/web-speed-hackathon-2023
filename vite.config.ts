import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: true,
    },
    plugins: [
      react(),
      topLevelAwait(),
      mode === 'analyze' &&
        visualizer({
          brotliSize: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          open: true,
        }),
    ],
    server: {
      port: 8080,
    },
  };
});
