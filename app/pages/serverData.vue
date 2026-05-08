<script setup lang="ts">
const { data } = await useFetch('/api/test2')
console.log('data',data.value)
</script>

<template>
    <pre>serverData:{{ data }}</pre>
</template>