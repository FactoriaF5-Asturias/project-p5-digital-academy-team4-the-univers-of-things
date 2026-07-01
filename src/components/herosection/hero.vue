<script setup>
import { ref } from 'vue'
import castilloDisney from '@/assets/img/castillodisney.jpg'
import HeroWeekCharacterModal from './HeroWeekCharacterModal.vue'

const showModal = ref(false)
</script>
<template>
  <section class="relative h-125 overflow-hidden rounded-3xl mb-12">

    <!-- Imagen de fondo -->
    <img
      :src="castilloDisney"
      alt="Castillo Disney"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Capa oscura para que el texto se lea mejor -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Contenido -->
    <div class="relative z-10 flex h-full items-center px-8 md:px-16">

      <div class="max-w-xl text-white">

        <h2 class="mb-4 text-4xl font-bold md:text-6xl">
          Descubre la magia de cada personaje
        </h2>

        <p class="text-base md:text-xl text-slate-200">
          Sumérgete en el mundo de los personajes Disney y descubre sus historias, aventuras y universos.
        </p>
        <button
  @click="showModal = true"
  class="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
>
  ⭐ Personaje de la semana
</button>

      </div>

    </div>
<HeroWeekCharacterModal
  v-if="showModal"
  @close="showModal = false"
/>
  </section>
</template>