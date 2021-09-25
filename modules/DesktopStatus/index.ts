import DesktopStatusMenu from './components/DesktopStatusMenu.vue'
import DesktopStatusContent from './components/DesktopStatusContent.vue'

export default {
  config: {
    name: 'DesktopStatus',
    area: 'SystemBar',
    position: 'right',
    opened: false
  },
  components: {
    menu: DesktopStatusMenu,
    content: DesktopStatusContent
  }
}