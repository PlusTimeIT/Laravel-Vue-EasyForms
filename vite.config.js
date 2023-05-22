import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
          entry: path.resolve(__dirname, 'src/main.js'),
          name: 'laravel-vue-easyforms',
          fileName: (format) => `laravel-vue-easyforms.${format}.js`,
        },
        rollupOptions: {
          external: ["vuetify", "vue", "axios", "vuetify/lib"],
          output: {
            // Provide global variables to use in the UMD build
            // Add external deps here
            globals: {
              vue: 'Vue',
              vutify:'vuetify',
              axios:'axios'
            },
          },
        },
      },
    plugins: [
      vue(),
      Components({
        resolvers: [VuetifyResolver()]
      })
    ],
});