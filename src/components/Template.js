import Nav from './Nav'

const Template = ({ title = 'a page', children }) => ['html', [
  ['head', [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['link', {
      rel: 'stylesheet',
      // href: 'https://unpkg.com/sakura.css/css/sakura.css',
      // href: 'https://newcss.net/new.min.css',
      href: 'https://newcss.net/lite.css',
      // href: 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css',
      // href: 'https://unpkg.com/mvp.css',
    }],
    ['link', {
      rel: 'stylesheet',
      href: '/styles.css',
    }],
    ['script', { src: '/libs.js' }],
    ['title', title],
  ]],
  ['body', [
    Nav,
    ...children,
    ['div', [
      ['img', { src: '/neocities.png' }],
    ]],
  ]],
]]

export default Template

