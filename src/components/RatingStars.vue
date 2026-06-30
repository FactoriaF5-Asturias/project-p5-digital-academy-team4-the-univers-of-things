<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useAuthStore } from '@/stores/authStore'

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const favoritesStore = useFavoritesStore()
const authStore = useAuthStore()

const selectedRating = computed(() => {
  const favorite = favoritesStore.favorites.find(
    (favorite) => favorite._id === props.character._id
  )

  return favorite?.rating || 0
})

const rateCharacter = (rating) => {
  favoritesStore.addFavorite(props.character)
  favoritesStore.rateFavorite(props.character._id, rating)
}
</script>

<template>
  <div
    v-if="authStore.user?.role === 'customer'"
    class="mt-3 flex justify-center gap-1"
  >
    <button
      v-for="star in 5"
      :key="star"
      @click.stop.prevent="rateCharacter(star)"
      class="text-2xl transition hover:scale-110"
    >
      {{ star <= selectedRating ? '⭐' : '☆' }}
    </button>
  </div>
</template>