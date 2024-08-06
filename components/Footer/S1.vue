<template>
    <div class="flex-cols items-center text-white w-[270px] h-[128px] space-y-2">
        <SvgoMeritologoSemiW class="h-[48px]" :fontControlled="false"/>
        <div>
            <div>
                <p class="text-s font-normal">สมัครเพื่อรับข้อมูลข่าวสาร</p>
            </div>
            <div class="border-b-[1px] border-white flex items-center">
                <div>
                    <input type="email" placeholder="enter your email here" class="text-s w-[254px] bg-black h-8">
                </div>
                <div class="h-full w-4 items-center">
                    <button>→</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>