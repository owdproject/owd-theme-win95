<template>
  <DesktopBase :class="{
    'owd-desktop__system-bar--position-top': desktopConfig.options.SystemBar.position === 'top',
    'owd-desktop__system-bar--position-bottom': desktopConfig.options.SystemBar.position === 'bottom',
  }">
    <SystemBar v-if="desktopConfig.options.SystemBar.enabled">

      <!-- additional slots for left area system-bar -->
      <template v-slot:system-bar-left-append>
        <slot name="system-bar-left-append"/>
      </template>

      <!-- additional slots for right area system-bar -->
      <template v-slot:system-bar-right-prepend>
        <slot name="system-bar-right-prepend"/>
      </template>
      <template v-slot:system-bar-right-append>
        <slot name="system-bar-right-append"/>
      </template>

    </SystemBar>

    <div class="owd-desktop__content">
      <slot/>

      <WindowsContainer />
    </div>

  </DesktopBase>
</template>

<script setup>
import {inject} from 'vue'
import DesktopBase from '@owd-client/core/src/components/desktop/DesktopBase.vue'
import WindowsContainer from '@owd-client/core/src/components/window/container/WindowsContainer.vue'
import SystemBar from "./DesktopSystemBar/DesktopSystemBar.vue";
import {useDesktop} from "@owd-client/core";

const owd = useDesktop()
const desktopConfig = inject('desktopConfig')

// load theme styles
import('@mdi/font/css/materialdesignicons.css')
import('../assets/styles/index.scss')

// load theme variables
import('../' + desktopConfig.variants[owd.config.theme?.variant ?? 'default'])
</script>

<style scoped lang="scss">
.owd-desktop {
  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }

  &__content {
    background: var(--owd-background);
  }
}
</style>