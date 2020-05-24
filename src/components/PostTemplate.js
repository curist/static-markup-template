const PostTemplate = ({
  title = 'a post',
  frontMatters = {},
  children,
}) => ['html', [
  ['head', [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://unpkg.com/sakura.css/css/sakura.css',
    }],
    ['title', frontMatters.title || title],
  ]],
  ['body', [
    ...children,
    ['div', [
      ['img', { src: '/neocities.png' }],
    ]],
  ]],
]]

export default PostTemplate

