<template>
  <DesktopBase :class="{
    'owd-desktop__system-bar--position-top': desktopOptions.SystemBar.position === 'top',
    'owd-desktop__system-bar--position-bottom': desktopOptions.SystemBar.position === 'bottom',
  }">
    <SystemBar v-if="desktopOptions.SystemBar.enabled">

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
import {inject, onMounted} from 'vue'
import DesktopBase from '@owd-client/core/src/components/desktop/DesktopBase.vue'
import WindowsContainer from '@owd-client/core/src/components/window/container/WindowsContainer.vue'
import SystemBar from "./DesktopSystemBar/DesktopSystemBar.vue";
import {useDesktop} from "@owd-client/core/index";

const owd = useDesktop()
const desktopOptions = inject('desktopOptions')

// send desktop:mounted event
onMounted(() => owd.emit('owd/desktop:mounted'))
</script>

<style scoped lang="scss">
.owd-desktop {
  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }

  &__content {
    background: $owd-background;
  }
}
</style>