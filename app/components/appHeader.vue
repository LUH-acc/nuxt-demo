<script setup lang="ts">
const headerTitle = ref('appHeader.vue')
const title = useTitle()
</script>

<template>
  <div>
    <h1>{{ headerTitle }}</h1>
    <h2>{{ title }}</h2>
  </div>
</template>