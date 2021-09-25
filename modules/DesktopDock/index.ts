import DesktopDockMenu from './components/DesktopDockMenu.vue'

export default {
  config: {
    name: 'DesktopDock',
    area: 'SystemBar',
    position: 'left'
  },
  components: {
    menu: DesktopDockMenu
  }
}