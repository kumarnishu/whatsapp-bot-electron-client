import { defineConfig } from 'vite'

export default defineConfig({

    server: {
        proxy: {
            '/api/v1': 'http://localhost:5000',
        }
    }
})