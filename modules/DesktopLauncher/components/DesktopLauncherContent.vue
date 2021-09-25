<template>
  <DesktopSystemBarMenuContent
      class="owd-desktop__application-menu__content"
      v-click-outside="menuClose"
  >

    <div class="owd-desktop__application-menu__content__inner">
      <DesktopLauncherContentCategories
          :allow-keys-navigation="navigationKeysSection === 'categories'"
          :categories="launcherCategories"
          :category-selected="categorySelected"
          @select="(category) => categorySelected = category"
          @setNavigationKeysSection="(value) => navigationKeysSection = value"
          @menuClose="menuClose"
      >
        <DesktopLauncherContentApps
            :allow-keys-navigation="navigationKeysSection === 'apps'"
            :apps="categoryApps"
            @setNavigationKeysSection="(value) => navigationKeysSection = value"
            @menuClose="menuClose"
        />
      </DesktopLauncherContentCategories>
    </div>

  </DesktopSystemBarMenuContent>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {useStore} from "vuex";
import DesktopSystemBarMenuContent from '../../../components/DesktopSystemBar/components/DesktopSystemBarMenuContent.vue'
import DesktopLauncherContentCategories from './DesktopLauncherContentCategories.vue'
import DesktopLauncherContentApps from './DesktopLauncherContentApps.vue'

const emit = defineEmits([
  'close'
])

const store = useStore()

const categorySelected = ref('')

// categories
const launcherCategories = computed(() => store.getters['core/launcher/categories'])
const launcherItems = computed(() => store.getters['core/launcher/items'])

// category > apps
const categoryApps = computed(() => {
  if (!categorySelected.value) return []

  return launcherItems.value[categorySelected.value].sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
})

// key navigation section
const navigationKeysSection = ref('');

// set default key navigation section on mounted
// (just to trigger the watcher in ApplicationMenuContentCategories.vue)
onMounted(() => navigationKeysSection.value = 'categories')

function selectNavigationKeysSection(value: string) {
  navigationKeysSection.value = value
}

function menuClose() {
  categorySelected.value = ''
  emit('close')
}
</script>

<style scoped lang="scss">
.owd-desktop__application-menu {
  &__content {
    width: 250px;
    max-width: calc(100% - 42px);
    height: 500px;
    max-height: 60vh;
    line-height: 32px;
    font-size: 13px;
    padding: 1px;
    left: 3px;

    &__inner {
      height: 100%;
      border-left: 30px solid grey;

      &:before {
        position: absolute;
        left: 9px;
        bottom: 7px;
        background-image: url('data:image/gif;base64,R0lGODlhDgBzAOf0AAAAAIAAAACAAICAAAAAgIAAgACAgMDAwMDcwKbK8AQEBAgICAwMDBERERYWFhwcHCIiIikpKVVVVU1NTUJCQjk5Of98gP9QUNYAk8zs/+/Wxufn1q2pkDMAAGYAAJkAAMwAAAAzADMzAGYzAJkzAMwzAP8zAABmADNmAGZmAJlmAMxmAP9mAACZADOZAGaZAJmZAMyZAP+ZAADMADPMAGbMAJnMAMzMAP/MAGb/AJn/AMz/AAAAMzMAM2YAM5kAM8wAM/8AMwAzMzMzM2YzM5kzM8wzM/8zMwBmMzNmM2ZmM5lmM8xmM/9mMwCZMzOZM2aZM5mZM8yZM/+ZMwDMMzPMM2bMM5nMM8zMM//MMzP/M2b/M5n/M8z/M///MwAAZjMAZmYAZpkAZswAZv8AZgAzZjMzZmYzZpkzZswzZv8zZgBmZjNmZmZmZplmZsxmZgCZZjOZZmaZZpmZZsyZZv+ZZgDMZjPMZpnMZszMZv/MZgD/ZjP/Zpn/Zsz/Zv8AzMwA/wCZmZkzmZkAmcwAmQAAmTMzmWYAmcwzmf8AmQBmmTNmmWYzmZlmmcxmmf8zmTOZmWaZmZmZmcyZmf+ZmQDMmTPMmWbMZpnMmczMmf/MmQD/mTP/mWbMmZn/mcz/mf//mQAAzDMAmWYAzJkAzMwAzAAzmTMzzGYzzJkzzMwzzP8zzABmzDNmzGZmmZlmzMxmzP9mmQCZzDOZzGaZzJmZzMyZzP+ZzADMzDPMzGbMzJnMzMzMzP/MzAD/zDP/zGb/mZn/zMz/zP//zDMAzGYA/5kA/wAzzDMz/2Yz/5kz/8wz//8z/wBm/zNm/2ZmzJlm/8xm//9mzACZ/zOZ/2aZ/5mZ/8yZ//+Z/wDM/zPM/2bM/5nM/8zM///M/zP//2b/zJn//8z///9mZmb/Zv//ZmZm//9m/2b//6UAIV9fX3d3d4aGhpaWlsvLy7KystfX193d3ePj4+rq6vHx8fj4+P/78KCgpICAgP8AAAD/AP//AAAA//8A/wD//////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACwAAAAADgBzAAAI/gDxCRyI74DBAwMP/COo8J9DgwUXClRI8B9CigIlVjSoUeNAixjxeczI8SNBkiFDZozIsONFhzAdkjxJs2bEmBZPNoSZMSfLjwhXiqTpUuVMkiNFBlWa1OfQphV/HlU6MeZSlQeXDrXJtavXgzQhFszKEGJWsRPNqr2qNiHbtG7jjpU7lmxdt2TBlhWrF29QtF51Aq55VuvewoIL902rmDDiw2f92oVsWPJiypcZT9YcmfPjup8928w8erPly4oBT149uC9qtK/Zwl6c2nBtx6S71t7Nu7dv2YnplsUb3HNn0I1P006Ne3BgzK53K49+m3Fg54mZG2ddHXlo3Rd7Kntv7Hu8aa7Ys1dWHlb69tDu1bfW7r678ebHoWO3f1r/b/HbtZfbXF4FBAA7');
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: contain;
        width: 14px;
        height: 115px;
        content: '';
      }
    }

    @media(max-height: 400px) {
      max-height: calc(100vh - 60px);
    }
  }
}
</style>