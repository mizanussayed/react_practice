import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // optional added to exposs to local netowrk or npm run host
  // package.json
  
  // server:{
  //   host:true
  // }
})
