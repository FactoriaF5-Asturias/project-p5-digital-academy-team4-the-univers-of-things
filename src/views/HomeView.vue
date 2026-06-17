<script setup>
import { ref, onMounted } from 'vue'
import TarjetasPersonajes from '../componentes/tarjetaspersonajes.vue'

const personajes = ref([])

onMounted(async () => {
  const response = await fetch('https://api.disneyapi.dev/character')
  const data = await response.json()

  personajes.value = data.data
    .filter(personaje => personaje.imageUrl)
    .slice(0, 10)
})
</script>

<template>
  <main>
    <h1>Disney Characters</h1>

    <TarjetasPersonajes
      v-for="personaje in personajes"
      :key="personaje._id"
      :personaje="personaje"
    />
  </main>
</template>