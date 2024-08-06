<template>
    <div @touchstart="isShow = true" @touchend="isShow = false" @mouseover="isShow = true" @mouseleave="isShow = false" class="w-fit h-fit">
        <div class="relative border-[0.5px] border-gray rounded-8 shadow-md z-50 desktop:w-[270px] desktop:h-[320px] laptop:w-[228px] laptop:h-[320px] tablet:w-[180px] tablet:h-[240px] mobile:w-[172px] mobile:h-[194px]">
            <div class="w-full h-full rounded-8 z-10">
                    <div :class="[isShow ? 'bg-light-gray' : 'bg-white']" class="pb-12 h-full w-full flex justify-center items-center rounded-8">
                        <img :src="`/images/${image}.png`" class="rounded-16">
                    </div>
            </div>

            <div class="absolute bottom-0 w-full bg-white z-20 rounded-8 p-6 space-y-3">
                <div>
                    <h4 class="text-black font-semibold tablet:text-m mobile:text-s">{{ name }}</h4>
                </div>
                <transition name="fade">
                    <div v-show="isShow">
                        <div class="space-y-3">
                            <div>
                                <p class="text-dark-gray desktop:text-s laptop:text-xs tablet:text-xs mobile:text-xs">
                                    {{ describe }}
                                </p>
                            </div>
                            <div>
                                <a href="/">
                                    <div class="flex space-x-1">
                                        <p class="text-black underline tablet:text-s mobile:text-xs">เรียนรู้เพิ่มเติม</p>
                                        <p>→</p>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['name','image','describe'])
const isShow = ref(false)
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition:all 0.5s linear;
}
</style>