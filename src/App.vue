<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderPublic from '@/components/layout/HeaderPublic.vue'

const route = useRoute()

// Ocultamos elementos globales si la ruta tiene meta: { hideHeader: true, hideFooter: true }
const shouldHideHeader = computed(() => route.matched.some(record => record.meta.hideHeader))
const shouldHideFooter = computed(() => route.matched.some(record => record.meta.hideFooter))
</script>

<template>
<<<<<<< HEAD
  <div class="app" :class="{ 'app--public': !route.meta.hideHeader }">
    <HeaderPublic v-if="!route.meta.hideHeader" />

    <RouterView />
=======
  <div class="app">
    <HeaderPublic v-if="!shouldHideHeader" />

    <main class="app__content">
      <RouterView />
    </main>
>>>>>>> feat/user-directory

    <Footer v-if="!shouldHideFooter" /> 
  </div>
<<<<<<< HEAD
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
}

</style>
=======
</template>
>>>>>>> feat/user-directory
