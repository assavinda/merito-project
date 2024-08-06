<template>
    <div>
        <NavBar :logIn="loggedIn"/>
        <div class="py-[76px] h-full min-h-screen">
            <slot></slot>
        </div>
        <FooterArea/>
    </div>
</template>

<script setup>
let loggedIn = ref(true)
</script>

<style scoped>

</style>