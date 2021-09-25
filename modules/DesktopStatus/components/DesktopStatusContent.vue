<template>
  <DesktopSystemBarMenuContent
      v-if="desktopModules.list.StatusSystemBar && desktopModules.list.StatusSystemBar.default"
      class="owd-desktop__status-menu__content"
      v-click-outside="menuClose"
  >

    <component
        v-for="(desktopModule, i) of desktopModules.list.StatusSystemBar.default" :key="i"
        :is="desktopModule.components.content"
        @close="menuClose"
    />

  </DesktopSystemBarMenuContent>
</template>

<script setup>
import DesktopSystemBarMenuContent from '../../../components/DesktopSystemBar/components/DesktopSystemBarMenuContent.vue'
import {inject} from "vue";

const emit = defineEmits([
  'close'
])

const desktopModules = inject('desktopModules')

function menuClose() {
  emit('close')
}
</script>

<style scoped lang="scss">
.owd-desktop__status-menu {
  &__content {
    display: grid;
    width: 300px;
    max-width: calc(100% - 32px);
    right: 3px;
    padding: 12px;
    text-align: center;
  }
}
</style>