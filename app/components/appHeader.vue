<script setup lang="ts">
const headerList = useHeader()
</script>

<template>
  <div class="max-w-[375px] xs:max-w-[640px] md:max-w-[1320px] mx-auto fixed top-0 left-0 right-0 z-100 px-4">
    <div
      class="flex w-full items-center py-2 px-2.5 bg-[#0C1A31]/20 backdrop-blur-sm rounded-3 mt-3">
      <div class="flex items-center gap-2">
        <NuxtLink to="/">
          <img class="w-8 h-8" src="/logo.svg" alt="logo" />
        </NuxtLink>
        <span>RoxyBrowser</span>
      </div>
      <div class="hidden gap-3 ml-4 md:flex">
        <div v-for="item in headerList" :key="item.title" class="py-1.5 px-3  hover:bg-white/30 rounded-md">
          <NuxtLink :to="item.href">{{ item.title }}</NuxtLink>
        </div>
      </div>
      <div class="ml-auto">
        <NuxtLink to="/login" class="py-1.5 px-3  hover:bg-white/30 rounded-md">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>