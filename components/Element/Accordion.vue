<template>
    <div>
      <div
        @click="isShow = !isShow"
        class="rounded-16 border-[0.5px] border-gray space-y-6 p-6 cursor-pointer desktop:w-[760px] laptop:w-[472px] tablet:w-[472px] mobile:w-[360px]">
        <div class="flex w-full items-center">
          <div class="text-black font-semibold mr-auto tablet:text-m mobile:text-s">คำถามที่พบบ่อย</div>
          <div
            :class="[isShow ? 'rotate-enter-to' : 'rotate-enter-from', 'tablet:size-[48px] mobile:size-[36px]', 'rounded-full', 'flex', 'justify-center', 'items-center', isShow ? 'bg-orange' : 'bg-black']"
            class="transition-transform duration-500 ease">
            <SvgoAccorDropdown class="tablet:size-[24px] mobile:size-[20px]" :fontControlled="false"/>
          </div>
        </div>
  
        <transition name="expand">
          <div v-show="isShow" ref="content">
            <transition name="fade">
              <div v-show="isShow" class="space-y-6">
                <div>
                  <hr class="h-[0.5px] text-light-gray">
                </div>
                <div>
                  <p class="text-dark-gray tablet:text-s mobile:text-xs">
                    ตอบคำถามเกี่ยวกับการชำระเงินและช่องทางบริจาค วิธีการขอลดหย่อนภาษี
                    วิธีการแลกแต้มบุญ รวมถึงการซื้อของทำบุญและการดูไลฟ์สด
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, nextTick } from 'vue';
  const isShow = ref(false);
  const content = ref(null);
  
  watch(isShow, async (newVal) => {
    if (newVal) {
      await nextTick();
      const el = content.value;
      el.style.height = el.scrollHeight + 'px';
    } else {
      await nextTick();
      const el = content.value;
      el.style.height = '0px';
    }
  });
  </script>
  
  <style scoped>
  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.3s ease;
  }
  
  .expand-enter-from,
  .expand-leave-to {
    height: 0;
    opacity: 1;
  }
  
  .expand-enter-to,
  .expand-leave-from {
    height: auto;
    opacity: 1;
  }
  
  .rotate-enter-active,
  .rotate-leave-active {
    transition: transform 0.3s ease;
  }
  
  .rotate-enter-from,
  .rotate-leave-to {
    transform: rotate(0deg);
  }
  
  .rotate-enter-to,
  .rotate-leave-from {
    transform: rotate(180deg);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  </style>
  