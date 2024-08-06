<template>
    <div class="flex space-x-16 items-center text-white tablet:w-[299px] h-[128px] mobile:w-[272px] mobile:space-x-12">
        <div v-for="section in 3">
            <div>
                <div>
                    <p class="text-s">หมวดหมู่</p>
                </div>
            </div>
            <div class="space-y-1">
                <div v-for="link in 4">
                    <a href="/">
                        <div class="flex items-center space-x-1">
                            <p class="text-xs underline">link</p>
                            <p class="rotate-90">⇱</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>