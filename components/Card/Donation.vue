<template>
        <div class="rounded-8 space-y-2 p-2 shadow-md bg-white cursor-pointer border-[0.5px] border-gray hover:bg-light-gray desktop:w-[270px] laptop:w-[224px] tablet:w-[180px] mobile:w-[172px]">

            <div class="w-full border-[0.5px] border-light-gray rounded-8 desktop:h-[183px] laptop:h-[164px] tablet:h-[120px] mobile:h-[120px]">
                <img :src="thumbnail" class="w-full h-full rounded-8 object-cover">
            </div>

            <div class="flex w-full items-end desktop:flex-row laptop:flex-col tablet:flex-col mobile:flex-col">
                <div class="mr-auto space-y-3">
                    <div class="w-full space-y-1">
                        <div class="bg-light-orange border-[0.5px] border-orange w-fit px-2 rounded-full">
                            <p class="text-xs font-semibold text-orange">{{ tag }}</p>
                        </div>
                        <div class="w-36">
                            <div>
                                <p class="text-black text-xs font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{{ name }}</p>
                            </div>
                            
                            <div>
                                <p class="text-xs text-dark-gray overflow-hidden whitespace-nowrap text-ellipsis">{{ location }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-36">
                        <p v-if="project != null" class="text-xs text-orange overflow-hidden whitespace-nowrap text-ellipsis italic">✦ {{ project }}</p>
                        <p v-else class="text-xs text-dark-gray overflow-hidden whitespace-nowrap text-ellipsis italic">✦ ยังไม่มีโครงการที่เปิดรับ</p>
                    </div>
                </div>

                <ButtonGeneral class="bg-black desktop:w-fit desktop:mt-0 laptop:w-full laptop:mt-2 tablet:w-full tablet:mt-2 mobile:w-full mobile:mt-2">
                    <p class="text-xs">ร่วมบริจาค</p>
                </ButtonGeneral>
            </div>

        </div>
</template>

<script setup>
const props = defineProps(['name','tag','location','project','thumbnail'])
</script>

<style scoped>

</style>