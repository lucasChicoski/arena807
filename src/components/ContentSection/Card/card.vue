
<template>
    <div class="card-content" >
        <img width="250" :src="props.imaga ?? defaultIamge" alt="">
        <div class="container-description">
            <p style="margin-bottom: 10px;" class="description">
                {{ props.title ?? defaultDescription }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const defaultIamge = ref('https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-beach-water-sport-flaticons-lineal-color-flat-icons.png')
const defaultDescription = ref('Defina sua descrição')
const props = defineProps<{
    imaga?:string,
    title?:string
}>()

</script>

<style lang="scss" >
@import './index.scss';
</style>