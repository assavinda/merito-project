<template>
    <div class="flex-cols space-y-4 text-white laptop:pt-0 tablet:pt-10">
        <div>
            <p class="text-s">ติดต่อเรา</p>
        </div>
        <div class="flex space-x-2">
            <NuxtLink v-for="i in 5" to="/">
                <div class="bg-white rounded-full w-12 h-12">

                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>