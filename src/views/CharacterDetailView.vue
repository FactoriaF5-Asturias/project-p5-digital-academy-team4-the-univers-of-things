<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useAuthStore } from '@/stores/authStore'
const route = useRoute()
const character = ref(null)
const favoritesStore = useFavoritesStore()
const authStore = useAuthStore()

onMounted(async () => {
  const response = await fetch(`https://api.disneyapi.dev/character/${route.params.id}`)
  const data = await response.json()

  character.value = data.data
})
</script>

<template>
  <main class="min-h-screen bg-slate-950 p-8 text-white">
    <RouterLink
      to="/"
      class="mb-6 inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700"
    >
      Volver
    </RouterLink>

    <section
      v-if="character"
      class="mx-auto max-w-4xl rounded-2xl bg-slate-900 p-8 shadow-lg"
    >
      <img
        :src="character.imageUrl"
        :alt="character.name"
        class="mx-auto mb-6 max-h-[500px] rounded-2xl object-contain"
      >

      <h1 class="mb-6 text-center text-4xl font-bold">
        {{ character.name }}
      </h1>
      <button
  v-if="authStore.user?.role === 'customer'"
  @click="favoritesStore.addFavorite(character)"
  class="mb-6 rounded-lg bg-red-600 px-5 py-2 font-semibold hover:bg-red-700"
>
  ❤️ Añadir a favoritos
</button>

      <p v-if="character.films?.length" class="mb-3">
        <strong>Películas:</strong> {{ character.films.join(', ') }}
      </p>

      <p v-if="character.tvShows?.length" class="mb-3">
        <strong>Series:</strong> {{ character.tvShows.join(', ') }}
      </p>
    </section>
  </main>
</template>