import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Neptune',
  description: 'Tetris research space',
  base: '/neptune/',

  markdown: {
    math: true
  },

  head: [
    [
      'link',
      { rel: 'icon', href: 'res/icon.png' }
    ]
  ],

  themeConfig: {
    logo: 'res/icon.png',
    lastUpdated: true,

    docFooter: {
      prev: false,
      next: false
    },

    search: {
      provider: 'local'
    },

    image: {
      lazyLoading: true
    },

    sidebar: [
      { text: 'About', link: '/' },

      {
        text: 'Documents',
        items: [
          {
            text: 'Openers',
            base: 'doc/',
            collapsed: false,
            items: [
              { text: 'Butterfly', link: 'butterfly' },
              { text: 'DB Cannon', link: 'db-cannon' },
              { text: 'Scorpion', link: 'scorpion' }
            ]
          },

          {
            text: 'Techniques',
            collapsed: true,
            items: [

            ]
          }
        ]
      },

      {
        text: 'Puzzles',
        collapsed: true,
        items: [
          {
            text: 'Sets 1-10',
            base: 'ps/',
            collapsed: true,
            items: [
              { text: '1', link: '1' }
            ]
          }
        ]
      }
    ]
  }
})
