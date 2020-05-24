import * as libs from './browser'
declare global {
  const libs: typeof libs
  type Handler = (e: Event, el: HTMLElement) => void
}

