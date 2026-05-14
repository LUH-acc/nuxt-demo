<script setup lang="ts">
const platforms = ['AliExpress', 'Amazon', 'eBay', 'Facebook', 'Esty', 'Amazon'] as const

const platformScrollerEl = ref<HTMLElement | null>(null)
let rafId = 0
let marqueeActive = true

/** px / frame（约 60fps 时约 33px/s） */
const SCROLL_SPEED = 0.55

function tick() {
    if (!marqueeActive) return

    const el = platformScrollerEl.value
    if (!el) {
        rafId = requestAnimationFrame(tick)
        return
    }

    const { scrollWidth, clientWidth, scrollLeft } = el
    if (scrollWidth <= clientWidth + 1) {
        rafId = requestAnimationFrame(tick)
        return
    }

    const half = scrollWidth / 2
    let next = scrollLeft + SCROLL_SPEED
    if (next >= half) next -= half
    el.scrollLeft = next

    rafId = requestAnimationFrame(tick)
}

onMounted(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    marqueeActive = true
    rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
    marqueeActive = false
    cancelAnimationFrame(rafId)
})
</script>

<template>
    <div class="relative py-15 h-full overflow-hidden">
        <div class="w-full mx-auto absolute z-0 top-0 left-0 right-0 h-full">
            <img src="~/assets/images/home-page/browser-bg.png" alt="browser-bg" class="w-full h-full">
        </div>
        <div class="relative z-10 mx-auto xs:px-4 md:px-[116px]">
            <div class="xs:w-[300px] md:w-[424px] mx-auto">
                <img src="~/assets/images/home-page/Reviews.png" alt="browser-icon" class="w-full">
            </div>
            <h2 class="font-family-archivo-bold mx-auto leading-[1.5] whitespace-pre-line">
                Premier Antidetect Browser <br> Streamline Your Workflow Effortlessly
            </h2>

            <div class="flex gap-2 justify-center mt-6">
                <button class="rounded-[8px] py-3 px-4.5 bg-[linear-gradient(108deg,#238AFF_75%,#F9B3B4_100%)]">
                    Try it Free
                </button>
                <button class="rounded-[8px] py-3 px-6 bg-white/10 text-white">
                    Contact us
                </button>
            </div>

            <div class="text-center font-weight-400 text-white/60 mt-6">
                Elevate your web journey with RoxyBrowser: Light, Secure, Limitless
            </div>

            <div class="mt-11 relative">
                <div
                    class="hidden md:flex absolute left-1/2 top-[-3.5px] -translate-x-1/2 -translate-y-1/2 line-height-6 gap-2 font-size-3.5 rounded-full py-1 px-4 bg-[linear-gradient(90deg,#3B84FA_0%,#7B75F0_50%,#FF846B_100%)]">
                    <span class="text-white">20% OFF First Purchase</span>
                    <span class="text-white">Free Proxy IPs</span>
                    <span class="text-white">No Payment Fees</span>
                </div>
                <div class="xs:px-4 md:px-25 mx-auto">
                    <img src="~/assets/images/home-page/display.png" alt="browser-icon" class="">
                </div>
            </div>

            <div class="mt-11">
                <div class="font-weight-400 mb-4.5">We protect every platform you use:</div>
                <div
                    ref="platformScrollerEl"
                    class="platform-marquee -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0"
                >
                    <ul class="flex w-max flex-nowrap gap-6 md:mx-auto">
                        <template v-for="dup in 2" :key="dup">
                            <li
                                v-for="(name, i) in platforms"
                                :key="`${dup}-${i}`"
                                class="shrink-0 whitespace-nowrap"
                            >
                                {{ name }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="relative mt-41">
                <div class="absolute xs:left-[211px] md:left-[810px] xs:top-[-50px] md:top-0 w-[489px] h-[489px] md:w-[800px] md:h-[800px] bg-[#10132d] rounded-full">
                    <img src="~/assets/images/home-page/global-reach.png" alt="global-reach" class="w-full h-full">
                </div>
                <div class="relative z-10">
                    <h2 class="font-family-archivo-bold md:w-[720px] text-left whitespace-nowrap">Global Reach and Reliability</h2>
                    <div class="font-weight-500 text-white/60 xs:font-size-[18px] md:font-size-[20px] text-left md:w-[720px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis, eros at pharetra
                        rutrum, ante odio fringilla urna</div>

                    <div class="flex flex-col md:flex-row mt-20">
                        <div class="flex flex-col">
                            <span class="text1-title">Hours served</span>
                            <span class="text1">2,348,394</span>
                        </div>
                        <div class="flex flex-col xs:mt-10 md:ml-25">
                            <span class="text1-title">Profiles protected</span>
                            <span class="text1">122,348,394</span>
                        </div>
                        <div class="flex flex-col xs:mt-10 md:ml-25">
                            <span class="text1-title">Latest visited</span>
                            <span class="text1">London,UK</span>
                        </div>
                    </div>

                    <div class="mt-20 md:mt-40 text-left font-weight-400 text-white/60 md:max-w-[983px]">
                        * Duis vestibulum lacinia magna, et dignissim odio semper ut. Maecenas ultricies tellus ac odio
                        dignissim euismod. Duis ut risus nisl. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                    </div>

                    <div class="relative md:w-full h-[300px] md:h-[120px] mx-auto mt-10 md:mt-32">
                        <div class="absolute w-full h-full flex flex-col md:flex-row justify-between items-center p-10">
                            <div class="xs:font-size-[24px] xs:font-weight-700">Impressed?  Download now and experience the interview tool firsthand!</div>
                            <div class="rounded-[8px] py-3.5 px-5 bg-white/10 text-white cursor-pointer hover:bg-white/30 transition-all duration-300">Download for macOS</div>
                        </div>
                        <div class="md:w-full h-full overflow-hidden rounded-2xl">
                            <img src="~/assets/images/home-page/download-bg.png" alt="download-mac" class=" w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
/* 自动横滑时隐藏滚动条，仍可用触控板/手指滑动 */
.platform-marquee {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.platform-marquee::-webkit-scrollbar {
    display: none;
}

.text1-title {
    font-weight: 700;
    text-align: left;
    font-size: 24px;
}

.text1 {
    font-weight: 700;
    text-align: left;
    font-size: 48px;
}

@media (max-width: 640px) {
    .text1-title {
        font-size: 18px;
    }
    .text1 {
        font-size: 36px;
    }
}

</style>