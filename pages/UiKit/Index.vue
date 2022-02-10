<template>
  <div class="ui-kit-page">

    <v-card style="background: #008081; height: 400px;">
      <WindowApp :width="400" :height="200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus orci, facilisis eget gravida eget, feugiat quis erat. Donec et libero quis diam finibus accumsan nec sit amet arcu. Integer id ante in tellus hendrerit tempor. Maecenas id turpis cursus, bibendum quam mollis, placerat enim. Nulla facilisi. Vivamus interdum erat eget lobortis rhoncus. Duis feugiat lorem sed purus vehicula, ac porta est pulvinar. Curabitur vitae tellus eget nibh egestas pellentesque et vel ante. In ultrices lectus ligula, non tristique eros efficitur vitae. Donec sit amet tortor sollicitudin, vestibulum ipsum ultricies, cursus eros. Fusce semper lacus quis sem egestas ornare. Sed vitae malesuada elit. Duis consectetur iaculis sem in pulvinar. Vivamus vel gravida orci. Nunc mollis blandit felis sed bibendum.
      </WindowApp>
    </v-card>

    <v-card class="bg-white" style="height: 400px;">
      asdfea

      <v-btn>asd</v-btn>
    </v-card>

  </div>
</template>

<script setup>
import Window from "~/themes/owd-theme-win95/components/Window/Window.vue";
import WindowApp from "~/themes/owd-theme-win95/components/Window/WindowApp.vue";
import {useDesktop} from "@owd-client/core";
import {inject} from "vue";

const owd = useDesktop()
const desktopConfig = inject('desktopConfig')

// load theme styles
import('@mdi/font/css/materialdesignicons.css')
import('../../assets/styles/index.scss')
import('../../assets/styles/variants/default/variables.scss')
</script>

<style scoped lang="scss">
.ui-kit-page {
  height: 100vh;
  background: #008081;
}
</style>