<template>
    <div class="flex w-fit h-full items-center space-x-3 tablet:flex mobile:hidden">
        <NuxtLink to="/cart/" :class=" route.path == '/cart/' ? 'text-orange bg-light-gray' : 'text-black' " class="rounded-8">
            <SvgoShop class="size-10 scale-125" :fontControlled="false" />
        </NuxtLink>
        <NuxtLink to="/account/" class="flex items-center">
            <div class="bg-gray rounded-full size-10"></div>
        </NuxtLink>
    </div>

    <div class="p-4 flex items-center justify-between tablet:hidden mobile:flex">
        <NuxtLink @click="emits('toggle')" to="/account/" class="flex w-full items-center">
            <div class="bg-gray rounded-full size-16 mr-4"></div>
            <div>
                <p class="text-black text-s">
                    ชื่อผู้ใช้
                </p>
            </div>
        </NuxtLink>
        <div class="flex items-end">
            <NuxtLink @click="emits('toggle')" to="/cart/" :class=" route.path == '/cart/' ? 'text-orange bg-light-gray' : 'text-black' " class="rounded-8">
                <SvgoShop class="size-14" :fontControlled="false" />
            </NuxtLink>
            <NuxtLink @click="emits('toggle')" to="/account/" :class=" route.path == '/account/' ? 'text-orange bg-light-gray' : 'text-black' " class="rounded-8">
                <SvgoSettings class="size-14" :fontControlled="false" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const emits = defineEmits(['toggle'])
</script>

<style lang="scss" scoped></style>