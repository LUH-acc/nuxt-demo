<script setup lang="ts">
import VideoComp from './videoComp.vue'
</script>

<template>
    <div class="relative px-4 pb-15">
        <div class="relative z-10">
            <div class="pt-[154px] mx-auto">
                <h2 class=" xs:font-size-[24px] font-family-archivo text-4xl font-bold text-white">Roxy AI Agent: One Command. All Agents at
                    Work.</h2>
                <div class="mt-3 font-weight-400 text-white ">Description: Assign tasks through natural-language AI
                    conversations and automate multiple browsers in batch.</div>
                <button class="mt-5 rounded-full px-6 py-2.5 border-1 bg-white/10 text-white">Comming Soon</button>
            </div>
        </div>
        <div class="w-full h-full mx-auto absolute z-0 top-0 left-0 right-0 ">
            <img src="~/assets/images/home-page/top-bg.png" alt="top-bg" class="w-full h-full">
        </div>

        <!-- 视频组件 -->
        <div>
            <VideoComp />
        </div>
    </div>
</template>