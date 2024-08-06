<template>
    <div @click="sendData(name)" class="w-fit h-fit cursor-pointer">
        <div :class="isSelected ? 'bg-light-orange border-[2px] border-orange' : 'bg-white border-[0.5px] border-gray hover:bg-light-gray'" class="relative w-[270px] h-[320px] rounded-8 shadow-md z-50 desktop:w-[270px] desktop:h-[320px] laptop:w-[228px] laptop:h-[320px] tablet:w-[180px] tablet:h-[240px] mobile:w-[172px] mobile:h-[194px]">
            <div class="w-full h-full rounded-8 z-10">
                    <div class="pb-12 h-full w-full flex justify-center items-center rounded-8">
                        <div>
                            <img :src="`/images/${image}.png`" class="rounded-16">
                        </div>
                    </div>
            </div>

            <div :class="isSelected ? 'bg-white text-orange' : ''" class="absolute bottom-0 w-full bg-white z-20 rounded-8 p-6 space-y-3">
                <div>
                    <h4 class="text-black font-semibold laptop:text-m tablet:text-s mobile:text-s">
                        {{ name }}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['name','image','isSelected'])

const emit = defineEmits(['selected']);

function sendData(name) {
    emit('selected',name)
}
</script>

<style scoped>

</style>