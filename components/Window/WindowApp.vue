<template>
  <WindowAppBase v-bind="props">

    <WindowAppNav
        :window="props.window"
        :title="props.window.config.title"
    >

      <template v-slot:nav-prepend>
        <slot name="nav-prepend" />
      </template>

      <template v-slot:nav-append>
        <slot name="nav-append" />
      </template>

    </WindowAppNav>

    <div class="owd-window__content">
      <slot />
    </div>

  </WindowAppBase>
</template>

<script setup>
import {inject} from "vue";
import WindowAppBase from '@owd-client/core/src/components/window/app/WindowAppBase.vue'
const desktopConfig = inject('desktopConfig')

const props = defineProps({
  window: Object
})
</script>