<template>
    <div class="container-galery">
        <h2>Galeria</h2>
        <div class="galery-photo">
            <div v-for="images in propsToSend">
                <CardPhoto :image="images" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import CardPhoto from "./CardPhoto/CardPhoto.vue"

let listImages: Ref<Array<string>> = ref([])
let propsToSend: Ref<Array<string>> = ref([])

let count = ref(0)

fetch('https://picsum.photos/v2/list').then(async (response) => {
    const response2: Array<object> = await response.json()
    
    response2.map((element: any) => {
        listImages.value.push(element.download_url)
    })

    listImages.value.forEach((element) => {
        if(count.value <= 9){
            propsToSend.value.push(element)
            count.value++
        }
    })
})

</script>

<style lang="scss" >
@import './index.scss';
</style>
