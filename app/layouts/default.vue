<script setup lang="ts">
const headerTitle = ref('Hello World from layouts header')
</script>

<template>
    <div>
      <header>
        <slot name="header">
          <!-- <h1>{{ headerTitle }}</h1> -->
        </slot>
      </header>
      <main>
        <slot />
      </main>
      <footer>
        <slot name="footer">
        </slot>
      </footer>
    </div>
  </template>
  