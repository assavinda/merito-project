<template>
    <div class="w-[172px] bg-white py-6 space-y-4 text-center">

        <div class="w-full flex justify-center">
            <slot name="stepIcon"></slot>
        </div>

        <div class="space-y-4">
            <h4 class="text-black font-medium tablet:text-m mobile:text-xs"><slot name="stepName"></slot></h4>
            <p class="text-xs text-dark-gray tablet:block mobile:hidden">
                <slot name="stepDescription"></slot>
            </p>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>