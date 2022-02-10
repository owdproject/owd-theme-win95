<template>
  <div class="owd-window__nav__btn">
    <owd-icon :name="props.icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String
})
</script>