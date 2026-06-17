<script setup>
import TarjetasPersonajes from '../componentes/tarjetaspersonajes.vue'

const personajePrueba = {
  name: 'Baloo',
  imageUrl: 'https://static.wikia.nocookie.net/disney/images/0/03/Profile_-_Baloo.jpeg'
}
</script>

<template>
  <main>
    <h1>Disney Characters</h1>

    <TarjetasPersonajes :personaje="personajePrueba" />
  </main>
</template>