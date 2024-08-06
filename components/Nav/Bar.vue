<template>
    <header class="w-full bg-white bg-opacity-70 backdrop-blur-[30px] flex justify-center shadow-lg fixed z-[100]">
        <nav class="w-full py-2 responsive-container">
            <div class="flex items-center">

                <div class="h-[60px] flex items-center mr-auto">
                    <NuxtLink to="/">
                        <SvgoMeritologo class=" tablet:h-[48px] mobile:h-[32px]" :fontControlled="false"/>
                    </NuxtLink>
                </div>

                <div class="flex space-x-5 tablet:flex mobile:hidden">
                    <div class="flex space-x-5 items-center">
                        <NuxtLink to="/donation/">
                            <NavLink :class=" route.path.includes('/donation/') ? 'border-b-[2px] border-orange scale-105' : '' ">
                                บริจาค
                            </NavLink>
                        </NuxtLink>

                        <NuxtLink to="/merit/">
                            <NavLink :class=" route.path.includes('/merit/') ? 'border-b-[2px] border-orange scale-105' : '' ">
                                ทำบุญ
                            </NavLink>
                        </NuxtLink>

                        <NuxtLink to="/live/">
                            <NavLink :class=" route.path.includes('/live/') ? 'border-b-[2px] border-orange scale-105' : '' ">
                                ไลฟ์
                            </NavLink>
                        </NuxtLink>

                        <NuxtLink to="/shop/">
                            <NavLink :class=" route.path.includes('/shop/') ? 'border-b-[2px] border-orange scale-105' : '' ">
                                ร้านค้า
                            </NavLink>
                        </NuxtLink>
                    </div>

                    <div v-if="logIn == true">
                        <NavUser/>
                    </div>

                    <div v-else>
                        <NavNoUser/>
                    </div>

                    
                </div>
                <div class="flex tablet:hidden mobile:flex relative">
                    <button @click="toggleMenu" class="flex justify-center items-center">
                        <SvgoBurger v-if="!isMenuOpen" class="text-black size-8" :fontControlled="false"/>
                        <SvgoCloseBurger v-else class="text-black size-8" :fontControlled="false"/>
                    </button>
                    <transition name="slide">
                        <div :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full', 'bg-white fixed top-[76px] right-0 w-screen h-screen shadow-md z-[70] transition-transform']">
                            <div v-if="logIn == true">
                                <NavUser @toggle="toggleMenu"/>
                            </div>
                            <div v-else>
                                <NavNoUser/>
                            </div>
                            <NuxtLink to="/">
                                <div @click="toggleMenu" :class=" route.path == '/' ? 'text-orange bg-light-gray' : 'text-black' " class="p-4 flex items-center font-medium">
                                    <div class="flex-grow">
                                        หน้าหลัก
                                    </div>
                                    <div>
                                        <SvgoBurgerLinksArrow class="size-6" :fontControlled="false"/>
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="/donation/">
                                <div @click="toggleMenu" :class=" route.path.includes('/donation/') ? 'text-orange bg-light-gray' : 'text-black' " class="p-4 flex items-center font-medium">
                                    <div class="flex-grow">
                                        บริจาค
                                    </div>
                                    <div>
                                        <SvgoBurgerLinksArrow class="size-6" :fontControlled="false"/>
                                    </div>
                                </div>
                            </NuxtLink>

                            <NuxtLink to="/merit/">
                                <div @click="toggleMenu" :class=" route.path.includes('/merit/') ? 'text-orange bg-light-gray' : 'text-black' " class="p-4 flex items-center font-medium">
                                    <div class="flex-grow">
                                        ทำบุญ
                                    </div>
                                    <div>
                                        <SvgoBurgerLinksArrow class="size-6" :fontControlled="false"/>
                                    </div>
                                </div>
                            </NuxtLink>

                            <NuxtLink to="/live/">
                                <div @click="toggleMenu" :class=" route.path.includes('/live/') ? 'text-orange bg-light-gray' : 'text-black' " class="p-4 flex items-center font-medium">
                                    <div class="flex-grow">
                                        ไลฟ์
                                    </div>
                                    <div>
                                        <SvgoBurgerLinksArrow class="size-6" :fontControlled="false"/>
                                    </div>
                                </div>
                            </NuxtLink>

                            <NuxtLink to="/shop/">
                                <div @click="toggleMenu" :class=" route.path.includes('/shop/') ? 'text-orange bg-light-gray' : 'text-black' " class="p-4 flex items-center font-medium">
                                    <div class="flex-grow">
                                        ร้านค้า
                                    </div>
                                    <div>
                                        <SvgoBurgerLinksArrow class="size-6" :fontControlled="false"/>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </transition>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const route = useRoute();
const isMenuOpen = ref(false);
const props = defineProps(['logIn'])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.8s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
