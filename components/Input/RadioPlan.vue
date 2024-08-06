<template>
    <div @click="sendData(planType)" :class="isSelected ? 'bg-orange text-white' : 'bg-white text-black  hover:bg-light-gray' " class="w-[172px] border-1 border-gray p-3 flex justify-center rounded-full cursor-pointer">
        <p class="tablet:text-s mobile:text-xs">{{ planType }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['planType','isSelected'])

const emit = defineEmits(['selected']);

function sendData(planType) {
    emit('selected',planType)
}
</script>

<style lang="scss" scoped>

</style>