import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      //tsconfig.json 也要设置
      '@': join(__dirname, "src"),
      '#': join(__dirname, "types") //types 用于存放一些公共type
    },
    extensions:['.js','.ts','.vue']
  },
  plugins: [vue()]
})
