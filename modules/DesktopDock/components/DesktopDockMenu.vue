<template>
  <div class="owd-desktop__dock-menu">

    <template v-for="(window) of dock.list">
      <v-btn :ripple="false"
          height="26"
          :class="{'v-btn--active': !window.storage.minimized}"
          @click="windowToggle(window)"
      >
        {{window.config.titleDock || window.config.title}}
      </v-btn>
    </template>

  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()

const dock = computed(() => {
  return {
    apps: store.getters['core/dock/apps'],
    list: store.getters['core/dock/list'],
  }
})

const windowToggle = async (windowInstance) => {
  if (!windowInstance.storage) {
    windowInstance = await windowInstance.module.createWindow(windowInstance.config)
    windowInstance.open(true)
    return true
  }

  if (windowInstance.storage.minimized) {
    windowInstance.open(true)
  } else {
    windowInstance.minimize()
  }

  return true
}
</script>

<style scoped lang="scss">
.owd-desktop__dock-menu {
  display: inline-block;
  width: calc(100% - 100px);

  .v-btn {
    display: inline-flex;
    font-weight: bold;
    margin: 0 0 0 6px;
    padding: 0 6px;

    &--active {
      // Colors
      --bg-color: #ffffff;
      --dot-color: #c3c3c3;

      // Dimensions
      --dot-size: 1px;
      --dot-space: 2px;

      border: 1px solid !important;
      border-color: #828282 #c3c3c3 #c3c3c3 #828282 !important;
      box-shadow: -1px -1px 0 0 black, 0 -1px 0 0 black, -1px 0 0 0 black, 1px 1px 0 0 white, 0 1px 0 0 white, 1px 0 0 0 white !important;
      background:
          linear-gradient(90deg, var(--bg-color) (var(--dot-space) - var(--dot-size)), transparent 1%) center,
          linear-gradient(var(--bg-color) (var(--dot-space) - var(--dot-size)), transparent 1%) center,
          var(--dot-color) !important;
      background-size: var(--dot-space) var(--dot-space) !important;
    }
  }
}
</style>