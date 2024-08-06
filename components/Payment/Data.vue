<template>
    <div class="space-y-1 rounded-16 border-1 border-gray tablet:w-[368px] tablet:p-6 mobile:w-[180px] mobile:p-2">
        <div class="flex">
            <h4 class="text-black font-medium mr-auto tablet:text-m mobile:text-s">
                {{ title }}
            </h4>

            <button @click="$emit('clicked')" class="text-black size-6">
                <SvgoEdit class="text-dark-gray hover:text-orange hover:scale-110 tablet:size-[24px] mobile:size-[18px]" :fontControlled="false"/>
            </button>
        </div>
        
        <div v-if="line1 != '' ">
            <p class="text-dark-gray tablet:text-s mobile:text-xs">{{ line1 }}</p>
            <p class="text-dark-gray tablet:text-s mobile:text-xs">{{ line2 }}</p>
        </div>
        
        <slot v-else>

        </slot>
    </div>
</template>

<script setup>
const props = defineProps(['title','line1','line2'])
</script>

<style lang="scss" scoped></style>