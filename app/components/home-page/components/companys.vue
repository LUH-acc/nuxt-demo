<script setup lang="ts">
</script>

<template>
    <div class="text-black md:w-[1280px] mx-auto xs:px-4 ">
        <h2 class="font-family-archivo-bold mt-20">All-in-One Account Management</h2>
        <div class="font-weight-400 text-[#042144] mt-2">Keep up with RoxyBrowser's latest research and exclusive insights on secure multi-account management</div>
        <div class="mt-10 grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-5 md:gap-x-8 md:gap-y-10 justify-items-center">
            <div v-for="company in companys" :key="company.name" class="w-[100px] h-[50px] md:w-[226px] md:h-[124px] bg-white rounded-2xl flex items-center justify-center">
                {{ company.name }}
            </div>
        </div>
    </div>
</template>