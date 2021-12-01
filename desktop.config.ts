// desktop component
import Desktop from './components/Desktop.vue'

// desktop modules
import DesktopLauncher from "./modules/DesktopLauncher";
import DesktopDock from "./modules/DesktopDock";
import DesktopStatus from "./modules/DesktopStatus";

// plugins
import Vuetify from "owd-plugin-vuetify/src"

// i18n
import locales from "./locales";

export default {
  name: 'win95',

  component: Desktop,

  modules: [
    DesktopLauncher,
    DesktopDock,
    DesktopStatus
  ],

  plugins: [
    Vuetify
  ],

  options: {
    Logo: {
      enabled: true
    },
    Window: {
      icons: {
        minimize: 'mdi-color-helper',
        maximize: 'mdi-window-maximize',
        fullscreen: 'mdi-fullscreen',
        close: 'mdi-window-close'
      }
    },
    SystemBar: {
      enabled: true,
      position: 'bottom',
      icons: {
        'battery': 'mdi-battery',
        'battery-0': 'mdi-battery-alert-variant-outline',
        'battery-20': 'mdi-battery-20',
        'battery-40': 'mdi-battery-40',
        'battery-60': 'mdi-battery-60',
        'battery-80': 'mdi-battery-80',
        'battery-100': 'mdi-battery'
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

  locales
}