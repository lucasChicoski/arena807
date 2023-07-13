<template>
    <div class="card-photo">
        <img width="100" :src="props.image" alt="">
    </div>
</template>
<script setup lang="ts">
 const props = defineProps<{
    image:string
 }>()
</script>

<style>
@import './index.scss';
</style>
