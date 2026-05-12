<script setup lang="ts">
</script>

<template>
    <div class="xs:px-4 md:px-[116px]">
        <h2 class="font-family-archivo-bold mt-7 md:mt-20 font-bold text-black">All-in-One Account Management</h2>
        <p class="font-weight-400 text-[#042144] mt-2">
            Keep up with RoxyBrowser's latest research and exclusive insights on secure multi-account management
        </p>

        <div class="relative mt-10">
            <section v-for="value in 2" :key="value" class="flex xs:flex-col md:flex-row gap-10 justify-center md:justify-between text-left px-2 py-5 pb-0 md:px-12.5 md:py-8 bg-white rounded-2xl mb-5">
                <div class="flex flex-col items-center md:items-start md:gap-2 w-full md:w-[413px]  md:pt-15">
                    <div class="p-3.5 bg-[#F3F4F7] rounded-2xl w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
                        <img src="~/assets/images/home-page/chrome.png" alt="account-card1" class="w-full h-full">
                    </div>
                    <h2 class="font-family-archivo-bold text-2xl text-black pt-5">
                        Before Using RoxyBrowser
                    </h2>
                    <p class="pt-3 md:pt-5 md:font-size-[20px] font-weight-400 text-center md:text-left text-black">Websites aggressively trace your online surfing, triggering account bans and privacy leaks.</p>
                </div>
                <div class="flex gap-2 bg-[#FED7D7] rounded-2xl p-[40px] pb-0">
                    <div>
                        <img src="~/assets/images/home-page/Amazon.png" alt="account-card1" class="w-full h-full">
                    </div>
                    <div class="hidden md:block">
                        <img src="~/assets/images/home-page/Amazon.png" alt="account-card1" class="w-full h-full">
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
