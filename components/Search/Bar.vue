<template>
    <div class="flex justify-center">
        <div class="bg-white rounded-16 border-[0.5px] border-gray z-40 absolute desktop:w-[368px] laptop:w-[368px] tablet:w-[368px] mobile:w-[348px]">
            <div class="flex space-x-2 items-center mx-4">
                <button @click="emit('search',inputText)">
                    <div>
                        <SvgoSearch class="size-[24px] text-gray hover:text-orange hover:scale-110" :fontControlled="false"/>
                    </div>
                </button>
                <input ref="inputref" @focus="focusedSearch = true" @blur="delayBlurInput" @keydown="checkKey" v-model="inputText" type="text" placeholder="ค้นหาวัดหรือมูลนิธิ" class="p-2 text-s font-normal w-full">
                <div class="flex space-x-2">
                    <button @click="clearInput">
                        <SvgoCancel class="size-[24px] text-gray hover:text-orange" :fontControlled="false"/>
                    </button>
                    <div class="pointer-events-none text-gray">
                        |
                    </div>
                    <button @click="showFilterList = !showFilterList" @blur="delayBlurFilter">
                        <SvgoFilter :class="showFilterList ? 'text-orange' : 'text-gray' " class="size-[24px] hover:text-orange" :fontControlled="false"/>
                    </button>
                </div>
            </div>
            <ul v-if="showSuggestion() == true" class="bg-white rounded-16">
                <li @click="selectOption(match)" v-for="(match) in searchMatch.slice(0, 8)" class="m-1 p-2 hover:bg-light-gray rounded-16 cursor-pointer" v-html="highlightText(match)"></li>
            </ul>

            <ul v-if="showFilterList == true" class="w-[192px] bg-white rounded-16 border-[0.5px] border-gray z-50 absolute right-0 top-[44px] tablet:hidden mobile:block">
                <li @click="selectFilter(filter)" v-for="(filter) in filterList" :class="filter == currentTag ? 'text-orange' : 'text-gray' " class="m-1 p-2 hover:bg-light-gray rounded-16 cursor-pointer">{{ filter }}</li>
            </ul>

            <ul v-if="showFilterList == true" class="w-[192px] bg-white rounded-16 border-[0.5px] border-gray z-50 absolute right-[-196px] top-[0px] tablet:block mobile:hidden">
                <li @click="selectFilter(filter)" v-for="(filter) in filterList" :class="filter == currentTag ? 'text-orange' : 'text-gray' " class="m-1 p-2 hover:bg-light-gray rounded-16 cursor-pointer">{{ filter }}</li>
            </ul>
        </div>
    </div>
</template>


<script setup>

const props = defineProps(['dataByTags','filterList','currentTag'])
const emit = defineEmits(['search','filtertag']);

const inputText = ref('');
const inputref = ref()

const currentFilter = ref('ทั้งหมด')
const searchMatch = ref([]);
const focusedSearch = ref(false)
const showFilterList = ref(false)

//enter to search
function checkKey(keyref) {
    if (keyref.key == 'Enter') {
        emit('search',inputText.value)
        inputref.value.blur();
    }
}

//bluring
function delayBlurInput() {
    setTimeout(() => {
        focusedSearch.value = false
        emit('search',inputText.value)
    },150)
    console.log('blur input')
}

function delayBlurFilter() {
    setTimeout(() => {
        showFilterList.value = false
    },150)
    console.log('blur filter')
}

//selecting
function selectOption(option) {
    inputText.value = option
    focusedSearch.value = false
}

function selectFilter(filter) {
    currentFilter.value = filter
    emit('filtertag',filter)
}

//suggestion
const suggestionData = () => {
  const text = inputText.value.trim().toLowerCase();

  searchMatch.value = Object.keys(props.dataByTags)
    .filter(key => key.toLowerCase().includes(text))
    .sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      
      const aIndex = aLower.indexOf(text);
      const bIndex = bLower.indexOf(text);
      
      if (aIndex === bIndex) {
        return aLower.localeCompare(bLower);
      }

      return aIndex - bIndex;
    });
};

const showSuggestion = () => {
    if (searchMatch.length != 0 && inputText.value != '' && focusedSearch.value == true) {
        return true
    }
    return false
}

//clear input text
const clearInput = () => {
  inputText.value = '';
  searchMatch.value = [];
  emit('search','')
};

//highlight matched text
const highlightText = (text) => {
  const regex = new RegExp(`(${inputText.value.trim().toLowerCase()})`, 'gi');
  return text.replace(regex, '<span class="text-orange">$1</span>');
};

watch(inputText, suggestionData);
</script>


<style scoped>
button {
    @apply w-6 h-6
}
</style>