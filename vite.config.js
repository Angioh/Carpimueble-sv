import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes('nodes_modules')){
            if(id.includes('react-icons') || id.includes('lucide-react')){
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    }
  },
})
