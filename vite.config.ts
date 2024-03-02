import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

// const publicDir = path.resolve(__dirname, './public');
// const getPublicFileList = async (targetPath: string) => {
//   const filePaths = await getFileList(targetPath);
//   const publicFiles = filePaths
//     .map((filePath) => path.relative(publicDir, filePath))
//     .map((filePath) => path.join('/', filePath));

//   return publicFiles;
// };

export default defineConfig(async ({ mode }) => {
  //   const videos = await getPublicFileList(path.resolve(publicDir, 'videos'));
  return {
    build: {
      minify: true,
    },
    plugins: [
      react(),
      wasm(),
      topLevelAwait(),
      mode === 'analyze' &&
        visualizer({
          brotliSize: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          open: true,
        }),
    ],
    // server: {
    //   proxy: {
    //     '/graphql': {
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/graphql/, ''),
    //       target: 'http://localhost:8080',
    //     },
    //   },
    // },
    server: {
      port: 8080, // 開発サーバーのポートを3000に設定
    },
  };
});
