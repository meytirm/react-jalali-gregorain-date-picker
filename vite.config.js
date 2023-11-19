import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/JalaliGregorianDatePicker.jsx'),
      name: 'react-jalali-gregorian-date-picker',
      fileName: (format) => `react-jalali-gregorian-date-picker.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})