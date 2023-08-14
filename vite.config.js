import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './public/img') + '/[!.]*', 
          dest: './', 
        },
      ],
    })
  ],
  server: {
    port: 3000,
    open: true
  }
})
