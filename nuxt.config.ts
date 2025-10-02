import tailWindCss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  vite: {
    plugins: [tailWindCss()],
  },

  css: ['~/assets/app.css'],

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        highlight: {
          theme: 'tokyo-night',
          langs: [
            'markdown',
            'mermaid',
            'js',
            'tf',
            'ts',
            'json',
            'html',
            'vue',
            'shell',
            'mdc',
            'yaml',
            'md',
            'toml',
            'sql',
            'docker',
            'dotenv',
            'git-commit',
            'git-rebase',
            'go',
            'haml',
            'hcl',
            'http',
            'lua',
            'nginx',
            'nix',
            'php',
            'plsql',
            'postcss',
            'prisma',
            'pug',
            'python',
            'regexp',
            'ruby',
            'rust',
            'shellscript',
            'terraform',
            'typst',
            'vue-html',
            'xml',
          ],
        }
      }
    }
  }
})
