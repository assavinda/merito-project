<template>
    <div>
        <SectionContents>
            <div class="flex flex-col justify-center space-y-8 desktop:pt-5xl laptop:pt-4xl tablet:pt-3xl mobile:pt-2xl">
                <div class="w-[368px] self-center flex flex-col justify-center space-y-8">
                    <div class="flex justify-center items-center space-x-4">
                        <h2 class="text-black font-semibold desktop:text-xl laptop:text-l tablet:text-l mobile:text-l">ร่วมบริจาคสำเร็จ</h2>
                        <SvgoTick class="size-12 text-orange" :fontControlled="false"/>
                    </div>
                    <div>
                        <div ref="card">
                            <PaymentThanks :date="thaiDate" :organization="organizationName" :project="projectName" username="username"/>
                        </div>
                    </div>
                    

                    <div class="w-full flex justify-center items-center">
                            <button class="p-4" @click="downloadImage">
                                <SvgoDownload class="text-black h-6 hover:text-orange" :fontControlled="false"/>
                            </button>
                            <button class="p-4">
                                <SvgoShare class="text-black h-6 hover:text-orange" :fontControlled="false"/>
                            </button>
                    </div>
                </div>

                <div class="flex flex-col justify-center text-center self-center space-y-6">
                    <div>
                        <p class="text-black font-semibold text-s">
                            “สิทธิกิจจัง สิทธิกัมมัง สิทธิลาโภ นิรันตะรัง สิทธิเตโช ชะโยนิจจัง สัพพะสิทธิ ภะวันตุ เต”
                        </p>
                    </div>

                    <div>
                        <p class="text-black text-s">
                            ขอให้การงานสำเร็จ  ขอให้การกระทำทุกอย่างจงสำเร็จ <br>
                            ขอให้มีลาภตลอดกาลนาน ขอให้มีเดชมีอำนาจยั่งยืน <br>
                            ขอให้ความสำเร็จทั้งหลายเหล่านี้จงมีแก่เธอ
                        </p>
                    </div>

                    <div class="flex self-center space-x-4 items-center">
                        <div class="bg-gray border-[1px] border-orange size-12 rounded-full">

                        </div>
                        <p class="text-black font-semibold text-s">
                            พระครูวิลาศกาญจนธรรม วัดท่าขนุน
                        </p>
                    </div>

                    <NuxtLink to="/donation/" class="text-black underline">
                        กลับไปที่หน้าบริจาค →
                    </NuxtLink>
                </div>
            </div>
        </SectionContents>
    </div>
</template>

<script setup>
import { toPng } from 'html-to-image';

const route = useRoute();

const organizationName = route.query.organization;
const projectName = route.query.project;

const thaiMonths = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
];

const thaiDate = ref('');

const getThaiDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543;

    const yearThai = year.toString().split('').join('');

    return `วันที่ ${day} ${month} ${yearThai}`;
};

onMounted(() => {
    thaiDate.value = getThaiDate();
});

const card = ref(null);

const downloadImage = async () => {
    if (card.value) {
        try {
            const dataUrl = await toPng(card.value, { pixelRatio: 5 });
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'อนุโมทนาบัตร.png';
            link.click();
        } catch (error) {
            console.error('เกิดข้อผิดพลาด', error);
        }
    } else {
        console.error('เกิดข้อผิดพลาด');
    }
};



</script>

<style scoped>
#thankscard {
    margin: 0;
    padding: 0;
}
</style>
