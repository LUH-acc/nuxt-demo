<script setup lang="ts">
const footerTitle = ref('appFooter.vue')
const footer = useFooter()
</script>

<template>
  <div>
    <h1>{{ footerTitle }}</h1>
    <h2>{{ footer }}</h2>
  </div>
</template>