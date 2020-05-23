import { css } from 'linaria'

const NavStyle = css`
  text-transform: uppercase;
`

const Nav = ['nav', { class: NavStyle }, [
  ['a', { href: '/' }, 'home'],
  ['a', { href: '/mypage' }, 'a page'],
]]

export default Nav
