<script setup lang="ts">
import NavProvide from './home-page/nav-provide.vue';

const headerList = useHeader()
const show = ref(false)
const showNavProvide = ref(true)
const handleMouseEnter = () => {
  console.log('handleMouseEnter');
  
  showNavProvide.value = true
}
const handleMouseLeave = () => {
  console.log('handleMouseLeave');
  showNavProvide.value = false
}
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
          <NavProvide>
            <template #reference>
              <NuxtLink>{{ item.title }}</NuxtLink>
            </template>
          </NavProvide>
        </div>
      </div>
      <div class="ml-auto">
        <NuxtLink class="py-1.5 px-3  hover:bg-white/30 rounded-md" @click="show = !show">Login</NuxtLink>
      </div>
    </div>
  </div>
  <TeleportOverlay v-model="show" :close-on-backdrop-only="false">
    <p>hello</p>
  </TeleportOverlay>
  
</template>