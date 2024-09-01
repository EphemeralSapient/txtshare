import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import viteCompression from 'vite-plugin-compression';
import { terser } from 'rollup-plugin-terser';
import viteImagemin from 'vite-plugin-imagemin';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/txtshare/',
  plugins: [
    react(),
    // viteCompression({algorithm: "brotliCompress", compressionOptions: {level: 11}}), 
    terser({compress: true}), 
    viteImagemin({verbose: true }), 
    purgecss({
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
    })
  ],
});