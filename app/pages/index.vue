<script setup lang="ts">
const title = ref('Hello World from index.vue')
const appConfig = useAppConfig()
const testData = appConfig.testData
const someAppConfig = useAppConfig().someAppConfig
const runtimeConfig = useRuntimeConfig()
definePageMeta({
  title: 'index page',
})
</script>

<template>
  <div>
    <pre>myEnvVariable:{{ runtimeConfig.public.apiSecretToken }}</pre>
    <h2 :style="{ color: testData.color }">{{ title }} {{ appConfig.foo }}</h2>
    <pre>someAppConfig:{{ someAppConfig }}</pre>
    <div>{{ $route.meta.title }}</div>
    <NuxtLink to="/changeLayout">Go to changeLayout</NuxtLink>
    <NuxtLink to="/test.middleRouter?name=test">Go to test.middleRouter</NuxtLink>
    <br>
    <NuxtLink to="/users-admin">Go to users-admin</NuxtLink>
    <br>
    <NuxtLink to="/users-editor">Go to users-editor</NuxtLink>
    <br>
    <NuxtLink to="/testSlug">Go to testSlug</NuxtLink>
    <br>
    <NuxtLink to="/parent">Go to parent</NuxtLink>
    <br>
    <NuxtLink to="/parent/child">Go to parent/child</NuxtLink>
    <br>
    <NuxtLink to="/parent2">Go to parent2</NuxtLink>
    <br>
    <NuxtLink to="/parent2/child">Go to parent2/child</NuxtLink>
    <br>
    <NuxtLink to="/app-page">Go to app-page</NuxtLink>
    <br>
    <NuxtLink to="/testPlugin">Go to testPlugin</NuxtLink>
    <br>
    <NuxtLink to="/useAppConfig">Go to useAppConfig</NuxtLink>
    <br>
    <NuxtLink to="/serverData">Go to serverData</NuxtLink>
    <br>
    <NuxtLink to="/toolsPage">Go to toolsPage</NuxtLink>
  </div>
</template>