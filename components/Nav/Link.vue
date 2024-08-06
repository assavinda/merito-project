<template>
    <div class="h-12 p-3 text-s text-black font-medium link">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.link:hover {
    @apply border-b-[2px] border-orange text-orange scale-105
}
</style>