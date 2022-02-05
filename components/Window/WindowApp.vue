<template>
  <Window style="border: 2px solid red;" :width="400" :height="300">
    <div>
      <button @click="emit('minimize')">Minimizza</button>
      <button @click="emit('close')">Chiudi</button>
    </div>

    <div style="border: 1px solid red;">
      <slot />
    </div>
  </Window>
</template>

<script setup>
const emit = defineEmits([
  'mount',
  'unmount',
  'close',
  'open',
  'blur',
  'focus',
  'minimize',
  'restore',
  'maximize',
  'unmaximize',
  'resize:start',
  'resize:move',
  'resize:end',
  'drag:start',
  'drag:move',
  'drag:end',
])
</script>

<style scoped>

</style>