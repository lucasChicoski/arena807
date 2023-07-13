<template>
    <footer>
        <div class="foooter-container">
            <div class="social-media">
                <ul class="ul-social-media">
                    <li class="li-social-media" >
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                    </li>
                    <li class="li-social-media">
                        <img width="50" height="50" src="https://img.icons8.com/ios/150/facebook--v1.png" alt="facebook--v1"/>
                    </li>
                    <li class="li-social-media">
                        <img width="50" height="50" src="https://img.icons8.com/ios/150/whatsapp--v1.png" alt="whatsapp--v1"/>
                    </li>
                </ul>
            </div>
            <div class="informations">
                <ul class="ul-inf">
                    <li class="li-inf" >
                        <a href="">Mais Informações</a>
                    </li>
                    <li class="li-inf">
                        <a href="">Contato</a>
                    </li>
                </ul>
            </div>
            <div class="copy-right">
                <p class="p-copy-right">
                    © {{ new Date().getFullYear() }} - Arena807
                </p>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">

</script>

<style lang="scss">
@import './index.scss';
</style>
