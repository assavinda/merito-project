<template>
    <div>
        <SectionContents>
            <div class="flex flex-col justify-center py-4 space-y-8">
                <div class="w-full text-center space-y-4">
                    <div>
                        <h2 class="font-semibold text-black tablet:text-xl mobile:text-l">
                            ร่วมบริจาคให้
                        </h2>
                        <h3 class="font-medium text-orange tablet:text-l mobile:text-m">
                            {{ organizationName }}
                        </h3>
                        <h4 class="text-dark-gray tablet:text-m mobile:text-s">
                            {{ projectName }}
                        </h4>
                    </div>
                    <p class="text-dark-gray tablet:text-s mobile:text-xs">
                        โปรดตรวจสอบจำนวนเงิน เบอร์โทรศัพท์และอีเมลให้ถูกต้อง
                    </p>
                </div>
                <div class="flex justify-center">
                    <div class="flex justify-between tablet:w-[760px] mobile:w-[372px]">
                        <PaymentStep @click="goToStep(1)" class="cursor-pointer">
                            <template v-slot:stepIcon>
                                <div class="border-[2px] border-orange flex justify-center items-center rounded-full hover:scale-105 tablet:size-[140px] mobile:size-[72px] tablet:border-[2px] mobile:border-[1px]">
                                    <SvgoPaymentDonateS1 class="text-orange tablet:size-[96px] mobile:size-[52px]" :fontControlled="false"/>
                                </div>
                            </template>
                            <template v-slot:stepName>
                                เลือกช่องทางบริจาค
                            </template>
                            <template v-slot:stepDescription>
                                เลือกช่องทางการชำระเงินผ่าน<br>
                                พร้อมเพย์, บัตรเครดิต/เดบิต, TrueMoney หรือ LINE PAY
                            </template>
                        </PaymentStep>

                        <div class="flex justify-center items-center tablet:w-16 tablet:h-[196px] mobile:w-8 mobile:h-[124px]">
                            <SvgoArrowRight :class=" step >= 2 ? 'text-orange' : 'text-gray' " class="tablet:size-[48px] mobile:size-[24px]" :fontControlled="false"/>
                        </div>

                        <PaymentStep @click="goToStep(2)" class="cursor-pointer">
                            <template v-slot:stepIcon>
                                <div :class=" step >= 2 ? 'border-orange' : 'border-gray' " class="border-[2px] border-gray flex justify-center items-center rounded-full hover:scale-105 tablet:size-[140px] mobile:size-[72px] tablet:border-[2px] mobile:border-[1px]">
                                    <SvgoPaymentDonateS2 :class=" step >= 2 ? 'text-orange' : 'text-gray' " class="tablet:size-[96px] mobile:size-[52px]" :fontControlled="false"/>
                                </div>
                            </template>
                            <template v-slot:stepName>
                                บริจาค
                            </template>
                            <template v-slot:stepDescription>
                                เลือกจำนวนเงินและจำนวนครั้ง<br>
                                กรอกเบอร์โทรศัพท์และอีเมล<br>
                                เพื่อรับข้อมูลบริจาค
                            </template>
                        </PaymentStep>

                        <div class="flex justify-center items-center tablet:w-16 tablet:h-[196px] mobile:w-8 mobile:h-[124px]">
                            <SvgoArrowRight :class="step == 3 ? 'text-orange' : 'text-gray' " class="tablet:size-[48px] mobile:size-[24px]" :fontControlled="false"/>
                        </div>

                        <PaymentStep @click="goToStep(3)" class="cursor-pointer">
                            <template v-slot:stepIcon>
                                <div :class="step == 3 ? 'border-orange' : 'border-gray' " class="flex justify-center items-center rounded-full hover:scale-105 tablet:size-[140px] mobile:size-[72px] tablet:border-[2px] mobile:border-[1px]">
                                    <SvgoPaymentDonateS3 :class="step == 3 ? 'text-orange' : 'text-gray' " class="tablet:size-[96px] mobile:size-[52px]" :fontControlled="false"/>
                                </div>
                            </template>
                            <template v-slot:stepName>
                                ยืนยันข้อมูล
                            </template>
                            <template v-slot:stepDescription>
                                ตรวจสอบจำนวนเงิน<br>
                                และข้อมูลให้ถูกต้อง<br>
                                จากนั้นกดยืนยันการบริจาค
                            </template>
                        </PaymentStep>
                    </div>
                </div>
            </div>
        </SectionContents>

        <!-- step 1 -->
        <SectionCards v-if="step == 1" class="mb-0">
            <div v-for="(method,key) in paymentMethods" class="flex justify-center">
                <CardPaymentSelect @selected="setDataMethod"
                :name="method.name" :image="method.image" :isSelected="isSelectedMethod(method.name)">
                </CardPaymentSelect>
            </div>
        </SectionCards>

        <!-- step 2 -->
        <SectionContents v-if="step == 2">
            <div class="w-full flex justify-center pt-16 pb-4 laptop:mb-16 tablet:mb-4 mobile:mb-12">
                <div class="space-y-6 flex-col justify-center pt-3 tablet:w-[564px] mobile:w-[372px]">

                    <div class="w-full flex justify-center">
                        <div class="flex flex-col relative">
                            <div class="flex items-center tablet:w-[240px] mobile:w-[160px]">
                            <InputUnderline>
                                <input type="number" placeholder="ระบุจำนวนเงิน" :class="moneyError ? 'text-orange' : 'text-black' " class="w-full text-center tablet:text-s mobile:text-xs" v-model="paymentdata.money">
                            </InputUnderline>
                            <p class="text-black font-medium px-4 tablet:text-s mobile:text-xs">บาท</p>
                        </div>
                            <p class="text-xs text-orange absolute bottom-[-20px]" v-if="moneyError">{{ moneyError }}</p>
                        </div>
                        <div class="flex items-center">
                           <p class="text-dark-gray tablet:text-s mobile:text-xs">เลือกชำระผ่าน</p> 
                           <div>
                                <img :src="`/images/${paymentImage}.png`" class="w-[112px] h-[42px] object-cover">
                           </div>
                        </div>
                    </div>

                    <div class="flex justify-center space-x-4">
                        <InputRadioPlan @click="setDataPlan(plan)" v-for="(plan) in plansList"
                        :planType="plan" :isSelected="isSelectedPlan(plan)" v-model="selectedPlan">
                        </InputRadioPlan>
                    </div>

                    <div class="flex justify-center tablet:space-x-3 tablet:flex-row mobile:space-x-0 mobile:flex-col mobile:mx-8">
                        <div>
                            <InputTemplate>
                                <input type="text" placeholder="เบอร์โทรศัพท์" :class="phoneError ? 'text-orange' : 'text-black' "  class="w-full tablet:text-s mobile:text-xs" v-model="paymentdata.phone" @input="validatePhone">
                            </InputTemplate>
                            <div class="h-8 flex items-center">
                                <p class="text-xs text-orange" v-if="phoneError">{{ phoneError }}</p>
                            </div>
                        </div>
                        
                        <div>
                            <InputTemplate>
                                <input type="email" placeholder="อีเมล" :class="emailError ? 'text-orange' : 'text-black' "  class="w-full tablet:text-s mobile:text-xs" v-model="paymentdata.email">
                            </InputTemplate>
                            <div class="h-8 flex items-center">
                                <p class="text-xs text-orange" v-if="emailError">{{ emailError }}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </SectionContents>

         <!-- step 3 -->
        <SectionContents v-if="step == 3">
            <div class="flex justify-center">
                <div class="flex tablet:w-[760px] mobile:w-[340px]">
                    <div class="grid grid-rows-3 gap-6 mr-auto">
                        <PaymentData @clicked="goToStep(1)" title="ช่องทางการชำระเงิน" line1="" line2="">
                            <div class="w-full flex justify-start ml-[-14px] items-center">
                                <img :src="`/images/${paymentImage}.png`" class="w-[120px] h-[46px] object-cover">
                            </div>
                        </PaymentData>
                        <PaymentData @clicked="goToStep(2)" :title="`จำนวนเงิน/${paymentdata.plan}`" :line1="`${paymentdata.money} บาท`" :line2="paymentdata.plan"/>
                        <PaymentData @clicked="goToStep(2)"  title="ช่องทางการติดต่อ" :line1="paymentdata.phone" :line2="paymentdata.email"/>
                    </div>

                    <div class="flex flex-col justify-center text-center space-y-4 h-full">
                        <div class="flex w-full justify-center">
                            <div class="bg-black rounded-16 tablet:size-[270px] mobile:size-[140px]">

                            </div>
                        </div>
                        

                        <div class="space-y-3">
                            <h4 class="text-black font-semibold text-wrap tablet:text-m mobile:text-s">
                                {{ organizationName }}
                            </h4>
                            <p class="text-black tablet:text-s mobile:text-xs">
                                บัญชี 123 - xxx - xxx
                            </p>
                            <div>
                                <NuxtLink 
                                :to="{ path: '/donation/certificate',
                                query: { organization: organizationName, project: projectName }}">
                                    <ButtonGeneral class="bg-orange">
                                    เรียบร้อย (ปุ่มทดลอง) 
                                    </ButtonGeneral>
                                </NuxtLink>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </SectionContents>

        <!-- button -->
        <SectionContents v-if="step < 3">
            <div class="w-full text-center tablet:mt-0 mobile:mt-4 tablet:text-s mobile:text-xs">
                <ButtonGeneral @click="nextStep" :class="isStepComplete() ? 'bg-orange' : 'bg-gray pointer-events-none' ">
                    {{ step == 2 ? 'ยืนยัน' : 'ต่อไป' }}
                </ButtonGeneral>
            </div>
        </SectionContents>
    </div>
</template>

<script setup>

// data
let selectedMethod = ref(null);
let selectedPlan = ref(null);
let step = ref(1);

const route = useRoute();
const organizationName = route.query.organization;
const projectName = route.query.project;

const paymentdata = ref({
    organization: organizationName,
    method: '',
    money: '',
    plan: '',
    phone: '',
    email: '',
});
const paymentMethods = {
    PromptPay: {
        name:'พร้อมเพย์',
        describe: 'อธิบายบลาๆๆๆ',
        image: 'PromptPay'
    },
    CreditDebit: {
        name:'บัตรเครดิต/เดบิต',
        describe: 'อธิบายบลาๆบลาๆๆ',
        image: 'CreditDebit'
    },
    TrueMoney: {
        name:'ทรูมันนี่',
        describe: 'อธิบายบลาๆบลดส',
        image: 'TrueMoney'
    },
    LINEpay: {
        name:'ไลน์ เพย์',
        describe: 'อธิบายบลาๆบลาด',
        image: 'LINEpay'
    },
};
const plansList = [
    'รายครั้ง',
    'รายเดือน'
];

const paymentImage = computed(() => {
    console.log("Selected method:", paymentdata.value.method);
    const entry = Object.entries(paymentMethods).find(([key, value]) => value.name === paymentdata.value.method);
    console.log("Payment entry found:", entry);
    return entry ? entry[1].image : '';
});

// setdata
function setDataMethod(methodName) {
    selectedMethod.value = methodName;
    paymentdata.value.method = selectedMethod.value;
};

function setDataPlan(planType) {
    selectedPlan.value = planType;
    paymentdata.value.plan = selectedPlan.value;
};

// step
function nextStep() {
    if (step.value < 3) {
        if (step.value == 1) {
            paymentdata.value.method = selectedMethod.value;
        }
        step.value += 1;
    }
    console.log(step.value);
};

function goToStep(stepNumber) {
    if (paymentdata.value.method != selectedMethod.value) {
        return;
    }
    else if (stepNumber == 3 && !isStepComplete()) {
        return;
    }
    else if (stepNumber == 3 && !isPaymentDataComplete()) {
        return;
    }
    step.value = stepNumber;
};

// checking
const isSelectedMethod = (method) => {
    return selectedMethod.value == method;
};

const isSelectedPlan = (plan) => {
    return selectedPlan.value == plan;
};

const isPaymentDataComplete = () => {
    return Object.values(paymentdata.value).every(value => value !== '');
};

const isStepComplete = () => {
    if (step.value == 1) {
        return selectedMethod.value != null;
    } else if (step.value == 2) {
        return isPaymentDataComplete() && !phoneError.value && !emailError.value && !moneyError.value;
    }
    return false;
};

function validatePhone(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/\D/g, '');  // Remove non-digit characters
    paymentdata.value.phone = filteredInput;
};

const moneyError = computed(() => {
    if (paymentdata.value.money === '') return ''; 
    return paymentdata.value.money > 0 ? '' : 'จำนวนเงินไม่ถูกต้อง'; 
});

const phoneError = computed(() => {
    if (!paymentdata.value.phone) return '';
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(paymentdata.value.phone) ? '' : 'เบอร์โทรศัพท์ไม่ถูกต้อง';
});

const emailError = computed(() => {
    if (!paymentdata.value.email) return '';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(paymentdata.value.email) ? '' : 'อีเมลไม่ถูกต้อง';
});
</script>

<style scoped>

</style>
