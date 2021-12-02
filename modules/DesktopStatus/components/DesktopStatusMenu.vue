<template>
  <DesktopSystemBarMenu>
    <div class="owd-desktop__status-menu">

      <div
          v-if="desktopModules.list.SystemBarStatus && desktopModules.list.SystemBarStatus.default"
          class="owd-desktop__status-menu__icons"
      >

        <component
            v-for="(desktopModule, i) of desktopModules.list.SystemBarStatus.default" :key="i"
            :is="desktopModule.components.menu"
            :config="desktopModule.config"
        />

      </div>

      <StatusTime />

    </div>

  </DesktopSystemBarMenu>
</template>

<script setup>
import DesktopSystemBarMenu from "../../../components/DesktopSystemBar/components/DesktopSystemBarMenu.vue";
import StatusTime from "./DesktopStatusTime.vue"

import {inject} from "vue";

const props = defineProps({
  config: Object
})

const desktopModules = inject('desktopModules')
</script>

<style scoped lang="scss">
.owd-desktop__status-menu {
  display: inline-flex;
  height: 25px;
  line-height: 23px;
  margin: 4px 1px 0 0;
  padding: 0 10px;
  border: 1px solid;
  border-color: #828282 white white #828282;
  pointer-events: none;

  &__icons {
    margin: 0 8px 0 0;

    i {
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>