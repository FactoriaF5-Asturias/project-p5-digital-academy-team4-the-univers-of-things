<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderPublic from '@/components/layout/HeaderPublic.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// El Header solo se oculta en Admin (definido en meta: { hideHeader: true })
const shouldHideHeader = () => route.meta.hideHeader

// Permitimos que el Footer se muestre SIEMPRE, 
// o si prefieres, ocúltalo solo si fuera necesario.
</script>

<template>
  <div class="app">
    <HeaderPublic v-if="!shouldHideHeader()" />

    <main class="app__content">
      <RouterView />
    </main>

    <Footer /> 
  </div>
</template>