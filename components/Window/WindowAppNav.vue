<template>
  <div class="owd-window__nav" @dblclick="props.window.toggleMaximize()">

    <div class="owd-window__nav__draggable" />

    <div class="owd-window__nav__btn-group owd-window__nav__btn-group--prepend">
      <slot name="nav-prepend" />
    </div>

    <div class="owd-window__nav__title">
      <div class="owd-window__nav__title-inner" v-text="title" />
    </div>

    <div class="owd-window__nav__btn-group owd-window__nav__btn-group--append">

      <slot name="nav-append" />

      <WindowAppNavButton
          v-if="props.window.config.minimizable"
          class="owd-window__nav__btn--essential owd-window__nav__btn--minimize"
          :icon="desktopConfig.options.Window.icons.minimize"
          @click="props.window.minimize()"
      />

      <WindowAppNavButton
          v-if="props.window.config.maximizable"
          class="owd-window__nav__btn--essential owd-window__nav__btn--maximize"
          :icon="desktopConfig.options.Window.icons.maximize"
          @click="props.window.toggleMaximize()"
      />

      <WindowAppNavButton
          v-if="props.window.config.fullscreenable"
          class="owd-window__nav__btn--essential owd-window__nav__btn--fullscreen"
          :icon="desktopConfig.options.Window.icons.fullscreen"
          @click="props.window.toggleFullscreen()"
      />

      <WindowAppNavButton
          class="owd-window__nav__btn--essential owd-window__nav__btn--close"
          :icon="desktopConfig.options.Window.icons.close"
          @click="props.window.destroy()"
      />

    </div>

  </div>
</template>

<script setup>
import {inject} from "vue";

const props = defineProps({
  title: String,
  window: Object
})

const emit = defineEmits(['toggleMaximize'])

const desktopConfig = inject('desktopConfig')
</script>
