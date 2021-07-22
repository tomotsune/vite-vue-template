import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'comps': path.resolve(__dirname, 'src/components'),
            'api': path.resolve(__dirname, 'src/api'),
            'views': path.resolve(__dirname, 'src/views'),
            'utils': path.resolve(__dirname, 'src/utils'),
            'routes': path.resolve(__dirname, 'src/routes'),
            'styles': path.resolve(__dirname, 'src/styles'),
            'plugins': path.resolve(__dirname, 'src/plugins')
        }
    },
    plugins: [vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`
                    }
                }
            ]
        })
    ]
})
