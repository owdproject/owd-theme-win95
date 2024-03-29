<template>
  <div
      ref="elementApplicationList"
      class="owd-desktop__application-menu__list"
      @keyup.esc="$emit('menu-close')"
      @keyup.up="selectPrevApp"
      @keyup.down="selectNextApp"
      @keyup.left="setNavigationKeysSection('categories')"
      @key.enter="windowOpen(appSelected)"
  >
    <ul v-if="apps && apps.length > 0">
      <li
          :class="{selected: appSelected === moduleAppWindow && allowKeysNavigation}"
          v-for="(moduleAppWindow, i) of apps"
          :key="i"
      >
        <button
            @mouseover="(e) => appMouseOver(e, moduleAppWindow)"
            @click="windowOpen(moduleAppWindow.callback)"
        >
          <div class="owd-desktop__application-menu__list__icon">
            <WindowIconMenu
                v-if="moduleAppWindow.icon"
                :icon="moduleAppWindow.icon"
                :force-svg="moduleAppWindow.icon.forceMenuAppSvg"
                is-application-menu
            />
          </div>
          <div class="owd-desktop__application-menu__list__name">
            <div class="owd-desktop__application-menu__list__name-inner" v-html="moduleAppWindow.title"/>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, nextTick} from "vue";
import WindowIconMenu from "@owd-client/core/src/components/window/icon/WindowIconMenu.vue";

const props = defineProps({
  apps: Array,
  allowKeysNavigation: Boolean
})

const emit = defineEmits([
  'menu-close',
  'select',
  'set-navigation-keys-section'
])

// element ref
const elementApplicationList = ref(null)

const appSelected = ref(null)

async function windowOpen(callback: any) {
  emit('menu-close')

  if (typeof callback === 'function') {
    callback()
  }
}

// initial focus on buttons to enable key navigation
watch(() => props.allowKeysNavigation, (active) => {
  selectNextApp()

  if (active && appSelected.value) {
    if (!appSelected.value.title) {
      elementApplicationList.value.querySelector('ul > li:first-child button').focus()
    } else {
      nextTick(() => elementApplicationList.value.querySelector('ul > li.selected button').focus())
    }
  }
})

const selectPrevApp = () => {
  if (!props.allowKeysNavigation) return false

  const currentIndex = props.apps.findIndex((app) => app === appSelected.value)

  if (currentIndex - 1 > -1) {
    appSelected.value = props.apps[currentIndex - 1]
  }
}

const selectNextApp = () => {
  if (!props.allowKeysNavigation) return false

  const currentIndex = props.apps.findIndex((app) => app === appSelected.value)

  if (currentIndex + 1 < props.apps.length) {
    appSelected.value = props.apps[currentIndex + 1]
  }
}

function appMouseOver(e: Event, moduleAppWindow: Object) {
  // enable key direction
  e.target.focus()

  // set key navigations on apps
  emit('set-navigation-keys-section', 'apps')
  appSelected.value = moduleAppWindow
}

// key navigation
function setNavigationKeysSection(value: string) {
  setTimeout(() => emit('set-navigation-keys-section', value), 20)
}
</script>

<style scoped lang="scss">
.owd-desktop__application-menu__list {
  position: absolute;
  top: -2px;
  left: calc(100% - 4px);
  background: $owd-window-button-background;
  border: 1px solid;
  border-color: $owd-window-button-border-color;
  box-shadow: $owd-window-button-box-shadow;
  width: 220px;
  overflow-y: auto;

  &__icon {
    display: inline-block;
    width: 32px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
    color: $owd-window-item-text-color-hover;
    transform: scale(0.75);
  }

  &__name {
    display: inline-block;
    line-height: 30px;

    &-inner {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      width: 100%;

      button {
        display: grid;
        grid-template-columns: 32px calc(100% - 32px);
        width: 100%;
        text-align: left;
        cursor: pointer;
        line-height: 20px;
        padding: 0 5px;
        background: $owd-window-item-background;
        color: $owd-window-item-text-color;
      }

      &.selected button {
        background: $owd-window-item-background-hover;
        color: $owd-window-item-text-color-hover;
      }
    }
  }
}
</style>