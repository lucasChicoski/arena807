<template>
    <div class="landpage" >
        <Appbar />
        <LogoSection/>
        <ContentSection/>
        <Galery/>
        <Footer/>
    </div>
</template>
<script setup lang="ts">
import Appbar from "@/components/Appbar/AppBar.vue"
import LogoSection from "@/components/LogoSection/LogoSection.vue"
import ContentSection from "@/components/ContentSection/ContentSection.vue"
import Galery from "@/components/PhotoGalery/PhotoGalery.vue"
import Footer from "@/components/Footer/Footer.vue"
</script>

<style>
.landpage{
    display: flex;
    flex-direction: column;
}
</style>
