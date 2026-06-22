<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderPublic from '@/components/layout/HeaderPublic.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Esta propiedad computada verifica toda la jerarquía de la ruta
const shouldHideHeader = computed(() => {
  return route.matched.some(record => record.meta.hideHeader)
})
</script>

<template>
  <div class="app">
    <HeaderPublic v-if="!shouldHideHeader" />

    <main class="app__content">
      <RouterView />
    </main>

    <Footer /> 
  </div>
</template>