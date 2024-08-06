<template>

    <div class="tablet:block mobile:hidden">
        <div class="bg-black w-[128px] py-3 px-8 rounded-8 cursor-pointer transition-transform duration-200 ease-linear hover:bg-orange hover:scale-105">
            <p class="text-white text-s font-medium">
                เข้าสู่ระบบ
            </p>
        </div>
    </div>

    <div class="p-4 flex items-center justify-between tablet:hidden mobile:flex">
        <NuxtLink to="/" class="flex w-full items-center">
            <div class="bg-gray rounded-full size-16 mr-4"></div>
            <div>
                <p class="text-black text-s">
                    Guest#2416
                </p>
            </div>
        </NuxtLink>
        <div>
            <div class="bg-black w-32 py-3 px-8 rounded-8 cursor-pointer transition-transform duration-200 ease-linear hover:bg-orange hover:scale-105">
                <p class="text-white text-s font-medium">
                    เข้าสู่ระบบ
                </p>
             </div>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
</style>