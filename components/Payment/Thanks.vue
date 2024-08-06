<template>
    <div class="bg-gradient-to-b from-light-orange to-white from-60% shadow-md rounded-16 flex flex-col justify-center items-center space-y-6 p-6">
        <div class="w-full h-fit">
            <p class="text-black font-ooh text-[48px]">
                Thank You
            </p>

            <p class="text-black text-xxs">
                ทาง <span class="font-medium">{{ organization }}</span> ขอขอบพระคุณ <span class="font-medium">คุณ{{ username }}</span> <br>
                ที่มีจิตเมตตาร่วมส่งมอบความสุข ช่วยเหลือ <br>
                <span class="font-medium">{{ project }}</span> <br>
                ขอให้บุญกุศลในครั้งนี้จงดลบันดาลให้ท่านพบแต่ความสุขความเจริญ <br>
                สุขภาพแข็งแรง การงานมั่นคงยิ่งๆขึ้นไป
            </p>
        </div>
        <div class="w-full flex justify-between items-center">
            <p class="text-black text-xxs">
                {{ date }}
            </p>
            <SvgoMeritologo class="h-6" :fontControlled="false" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['date','organization','project','username'])
</script>

<style scoped>
.font-ooh {
    font-family: "Oooh Baby", cursive;
}
</style>