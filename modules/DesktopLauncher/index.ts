import DesktopLauncherMenu from './components/DesktopLauncherMenu.vue'
import DesktopLauncherContent from './components/DesktopLauncherContent.vue'

export default {
  config: {
    name: 'DesktopLauncher',
    area: 'SystemBar',
    position: 'left',
    opened: false
  },
  components: {
    menu: DesktopLauncherMenu,
    content: DesktopLauncherContent
  }
}