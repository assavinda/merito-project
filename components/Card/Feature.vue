<template>
    <div class="tablet:w-full mobile:w-fit">
        <div class="bg-light-orange rounded-16 space-y-4 pb-6 pt-12 px-6 shadow-md  desktop:w-[270px] laptop:w-[228px] tablet:w-full tablet:block mobile:hidden">

            <div class="relative">
                <div class="absolute bottom-0">
                    <div class="bg-white rounded-full border-[1.5px] border-orange w-16 h-16 shadow-md  flex justify-center place-items-center">
                        <slot name="icondesktop">

                        </slot>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-black font-semibold desktop:text-l laptop:text-m tablet:text-m">
                    {{ name }}
                </h3>
            </div>

            <div class="h-[72px]">
                <p class="text-dark-gray text-wrap desktop:text-s laptop:text-xs tablet:text-xs">
                    {{ describe }}
                </p>
            </div>

            <div>
                <a href="/">
                    <div class="flex space-x-1">
                        <p class="text-black underline desktop:text-s tablet:text-s">เรียนรู้เพิ่มเติม</p>
                        <p>→</p>
                    </div>
                </a>
            </div>
            
        </div>

        <div class="text-center tablet:hidden mobile:block">
           <div class="bg-white rounded-full border-[1.5px] border-orange w-16 h-16 shadow-md mb-2 flex justify-center place-items-center">
                <slot name="iconmobile">

                </slot>
            </div> 
            <h5 class="text-black">{{ name }}</h5>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['name','describe'])

</script>

<style scoped>

</style>