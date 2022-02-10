// desktop component
import Desktop from './components/Desktop.vue'
import WindowApp from './components/Window/WindowApp.vue'

// desktop modules
import DesktopLauncher from "./modules/DesktopLauncher";
import DesktopDock from "./modules/DesktopDock";
import DesktopStatus from "./modules/DesktopStatus";

// plugins
import Vuetify from "owd-vuetify-plugin/src"

// locales
import locales from "./locales";
import WindowAppNav from "./components/Window/WindowAppNav.vue";
import WindowAppNavButton from "./components/Window/WindowAppNavButton.vue";

export default {
  name: 'win95',
  compatibility: '2.0.0-beta.4',

  variants: {
    'default': 'assets/styles/variants/default/variables.scss'
  },

  options: {
    Logo: {
      enabled: true
    },
    Window: {
      icons: {
        minimize: 'mdi mdi-color-helper',
        maximize: 'mdi mdi-window-maximize',
        fullscreen: 'mdi mdi-fullscreen',
        close: 'mdi mdi-window-close'
      }
    },
    SystemBar: {
      enabled: true,
      position: 'bottom',
      icons: {
        'battery': 'mdi mdi-battery',
        'battery-0': 'mdi mdi-battery-alert-variant-outline',
        'battery-20': 'mdi mdi-battery-20',
        'battery-40': 'mdi mdi-battery-40',
        'battery-60': 'mdi mdi-battery-60',
        'battery-80': 'mdi mdi-battery-80',
        'battery-100': 'mdi mdi-battery'
      }
    },
    Status: {
      menu: {
        dateFormat: 'MMM D',
        timeFormat: 'HH:mm'
      },
      calendar: {
        header: {
          dayOfWeekFormat: 'dddd',
          dateFormat: 'MMMM D YYYY'
        }
      }
    }
  },

  locales,

  components: {
    'Desktop': Desktop,
    'WindowApp': WindowApp,
    'WindowAppNav': WindowAppNav,
    'WindowAppNavButton': WindowAppNavButton
  },

  modules: [
    DesktopLauncher,
    DesktopDock,
    DesktopStatus
  ],

  plugins: [
    Vuetify
  ]
}