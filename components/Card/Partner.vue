<template>
    <div>
        <div class="bg-white rounded-16 shadow-md px-6 pb-6 pt-8xl space-y-4 justify-center desktop:w-[368px] laptop:w-[368px] tablet:w-[368px] mobile:w-[220px]">

            <div class="relative flex justify-center">
                <div class="absolute bottom-5">
                    <div class="bg-light-gray rounded-full shadow-xl text-center place-items-center size-32">
                        <img :src="thumbnail" class="w-full h-full rounded-full object-cover">
                    </div>
                </div>
            </div>

            <div>
                <p class="text-center text-dark-gray tablet:block mobile:hidden">
                    {{ describe }}
                </p>
            </div>

            <div class="text-center w-full">
                <h4 class="text-black font-semibold tablet:text-l mobile:text-s">{{ name }}</h4>
                <p class="text-dark-gray font-semibold tablet:text-s mobile:text-xs">{{ location }}</p>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['name','describe','location','thumbnail'])
</script>

<style scoped>

</style>