import {transformContentFile, transformYaml, countWordsAndTime } from './utils/functions';
import tailWindCss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-configi

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  app:{
    head: {
      title: "Nicolas Villarroel",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'es',
      },
      script: [
        {
          defer: true,
          src: "https://umami.nicolasvillarroel.cl/script.js",
          'data-website-id': "df6036a8-1a0b-40ec-922f-2355bf2d1e54",
        },
      ],
    },
  },

  hooks: {
    'content:file:beforeParse'(ctx) {
      const {file, content} = ctx;
      if (file.extension === '.md') {
        console.log('transform content')
        transformContentFile(file);
      }
      if (['.yaml', '.yml'].includes(file.extension!)) {
        file.body = transformYaml(file.body)
        console.log('update yaml')
      }
    },
    'content:file:afterParse'(ctx) {
      const {file, content} = ctx;
      const wordsAndTime = countWordsAndTime(file);
      content.readingTime = wordsAndTime.readingTime;
      content.wordCount = wordsAndTime.wordsCount;

    }
  },


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
  },
  image: {
    domains: ['raw.githubusercontent.com']
  }
})
