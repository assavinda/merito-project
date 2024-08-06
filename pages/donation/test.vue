<template>
    <div>
        <div id="my-img" ref="htmlContent">
            <div>Test 1</div>
            <div>Test 2</div>
            <div>Test 3</div>
            <div>Test 4</div>
            <div>Test 5</div>
        </div>
        <button @click="savePic()">Save</button>
    </div>
</template>
<style>
#my-img{
    width: 250px;
    height: 250px;
    background-color: red;
}
</style>
<script setup>
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const htmlContent = ref(null);

const savePic = async () => {

    if (htmlContent.value) {
        try {
        const dataUrl = await toPng(htmlContent.value);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'html-content.png';
        link.click();
        } catch (error) {
        console.error('Failed to save as image:', error);
        }
    }

}
</script>