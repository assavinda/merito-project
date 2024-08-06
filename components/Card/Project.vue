<template>
        <div @touchstart="isShow = true" @touchend="isShow = false" @mouseover="isShow = true" @mouseleave="isShow = false" class="cursor-pointer">
            <div class="relative rounded-8 shadow-md z-50 desktop:w-[270px] desktop:h-[320px] laptop:w-[228px] laptop:h-[280px] tablet:w-[172px] tablet:h-[228px] mobile:w-[172px] mobile:h-[194px]">
                <div class="w-full h-full rounded-8 z-10 desktop:pb-3 laptop:pb-0">
                        <div :class="[isShow ? 'bg-light-gray' : 'bg-white']" class="pb-12 h-full w-full flex justify-center items-center rounded-8">
                            <div class="bg-light-orange rounded-8 desktop:w-[232px] desktop:h-[216px] laptop:w-[208px] laptop:h-[200px] tablet:w-[180px] tablet:h-[194px] mobile:w-[172px] mobile:h-[172px]">
                                <img :src="thumbnail" class="h-full w-full object-cover rounded-8">
                            </div>
                        </div>
                </div>

                <div class="absolute bottom-0 w-full min-h-16 bg-white border-t-[1px] border-light-gray z-20 rounded-8 p-2 space-y-3">
                    <div>
                        <h4 class="text-black font-semibold desktop:text-m laptop:text-s tablet:text-s mobile:text-xs">{{ name }}</h4>
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
                                    <NuxtLink 
                                    :to="{ path: '/donation/payment',
                                    query: { organization: organization, project: name }}">
                                        <ButtonGeneral class="bg-black w-full">
                                            <p class="tablet:text-s mobile:text-xs">ร่วมบริจาค</p>
                                        </ButtonGeneral>
                                    </NuxtLink>
                                </div>
                                
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
</template>

<script setup>
const isShow = ref(false)
const props = defineProps(['organization','name', 'describe','thumbnail'])
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition:all 0.5s linear;
}

</style>