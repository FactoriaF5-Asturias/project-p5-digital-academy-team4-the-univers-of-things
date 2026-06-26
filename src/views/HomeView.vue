<script setup>
import { onMounted, computed } from 'vue'
import { useCharactersStore } from '@/stores/charactersStore'

import Hero from '../components/herosection/hero.vue'
import Tarjetaspersonajes from '@/components/cards/tarjetaspersonajes.vue'
<<<<<<< HEAD
import BarraBusqueda from '@/components/BarraBusqueda/barraBusqueda.vue'
import TopRatedCharacters from '@/components/TopRatedCharacters/topRatedCharacters.vue'

const charactersStore = useCharactersStore()
const filteredCharacters = computed(() => {
  return charactersStore.characters
    .filter((personaje) =>
      personaje.name
        .toLowerCase()
        .includes(charactersStore.search.toLowerCase())
    )
=======
const personajes = ref([])

onMounted(async () => {
  const response = await fetch('https://api.disneyapi.dev/character')
  const data = await response.json()

  personajes.value = data.data
    .filter(personaje => personaje.imageUrl)
>>>>>>> feat/user-directory
    .slice(0, 10)
})

onMounted(() => {
  charactersStore.fetchCharacters()
})
</script>

<template>
  <main class="min-h-screen bg-slate-950 p-8">

   <Hero />

<TopRatedCharacters />
<BarraBusqueda />

    <h1 class="mb-8 text-3xl font-bold text-white">
      Disney Characters
    </h1>

    <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <Tarjetaspersonajes
      v-for="personaje in filteredCharacters"
        :personaje="personaje"
      />
    </section>

  </main>
</template>
