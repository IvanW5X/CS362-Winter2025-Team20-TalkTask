import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

dotenv.config({path: path.resolve(__dirname, "../.env")});

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [
    react(),
    tailwindcss()
  ],
});
