const Nav = ['nav', [
  ['a', { href: '/' }, 'home'],
  ['a', { href: '/mypage' }, 'a page'],
]]
const Template = ({ title = '', children }) => ['html', [
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
    ['title', title],
  ]],
  ['body', [
    Nav,
    ...children,
  ]],
]]

export default Template

