// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // import { viteStaticCopy } from 'vite-plugin-static-copy';
// import path from "path";
// import { resolve } from "path"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     // viteStaticCopy({
//     //   targets: [
//     //     {
//     //       src: path.resolve(__dirname, './public/img') + '/[!.]*', 
//     //       dest: './', 
//     //     },
//     //   ],
//     // })
//   ],
//   resolve: {
//     alias: [{ 
//       find: "@server", 
//       replacement: resolve(__dirname, './src/server/') 
//     }]
//   },
//   server: {
//     port: 3000,
//     open: true
//   }
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'classic' // Add this line
//   }), viteTsconfigPaths(), svgrPlugin()],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
